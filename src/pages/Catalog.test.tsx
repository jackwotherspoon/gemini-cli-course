import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Catalog } from './Catalog';

const { mockSessions } = vi.hoisted(() => {
  return {
    mockSessions: [
      {
        id: '1',
        title: 'React Keynote',
        description: 'Deep dive into React',
        speaker: 'Dr. Sarah Chen',
        category: 'Keynote',
        day: 'Day 1',
        time: '10:00 AM',
        location: 'Hall A',
        details: {
          fullDescription: 'Comprehensive React overview',
          takeaways: [],
          tracks: ['Frontend'],
          level: 'Beginner'
        }
      },
      {
        id: '2',
        title: 'Vue Workshop',
        description: 'Hands-on with Vue',
        speaker: 'Marcus Rodriguez',
        category: 'Learning Lab',
        day: 'Day 2',
        time: '2:00 PM',
        location: 'Room 200',
        details: {
          fullDescription: 'Advanced Vue patterns',
          takeaways: [],
          tracks: ['Frontend', 'Frameworks'],
          level: 'Advanced'
        }
      },
      {
        id: '3',
        title: 'AI in 2026',
        description: 'Future of AI',
        speaker: 'Emily Watson',
        category: 'Breakout',
        day: 'Day 1',
        time: '11:00 AM',
        location: 'Hall B',
        details: {
          fullDescription: 'ML and LLM trends',
          takeaways: [],
          tracks: ['AI/ML'],
          level: 'Intermediate'
        }
      }
    ]
  };
});

vi.mock('../data/sessions', () => ({
  SESSIONS: mockSessions
}));

const renderCatalog = (initialEntry = '/catalog') => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Catalog Page', () => {
  it('renders all sessions initially', () => {
    renderCatalog();
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
  });

  it('filters by search query (title)', async () => {
    renderCatalog();
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });

  it('filters by search query (fullDescription)', async () => {
    renderCatalog();
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'Advanced Vue patterns' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Day from URL', () => {
    renderCatalog('/catalog?day=Day+2');
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });

  it('filters by Level', async () => {
    renderCatalog();
    const levelSelect = screen.getByDisplayValue('All Levels');
    fireEvent.change(levelSelect, { target: { value: 'Advanced' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Speaker', async () => {
    renderCatalog();
    const speakerSelect = screen.getByDisplayValue('All Speakers');
    fireEvent.change(speakerSelect, { target: { value: 'Emily Watson' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Track', async () => {
    renderCatalog();
    const trackSelect = screen.getByDisplayValue('All Tracks');
    fireEvent.change(trackSelect, { target: { value: 'AI/ML' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('combines multiple filters', async () => {
    renderCatalog();
    
    const daySelect = screen.getByDisplayValue('All Days');
    fireEvent.change(daySelect, { target: { value: 'Day 1' } });
    
    const categorySelect = screen.getByDisplayValue('All Categories');
    fireEvent.change(categorySelect, { target: { value: 'Keynote' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('AI in 2026')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });

  it('clears all filters', async () => {
    renderCatalog('/catalog?day=Day+2&category=Learning+Lab');
    
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
    
    const clearButton = screen.getByText('Clear all filters');
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
    });
  });

  it('shows no results message when no matches', () => {
    renderCatalog();
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'NonExistentTerm' } });

    expect(screen.getByText('No sessions found')).toBeInTheDocument();
    expect(screen.getByText('Showing 0 sessions')).toBeInTheDocument();
  });
});