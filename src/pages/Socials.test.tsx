import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Socials } from './Socials';
import { BrowserRouter } from 'react-router-dom';

describe('Socials', () => {
  it('renders the social kit page', () => {
    render(
      <BrowserRouter>
        <Socials />
      </BrowserRouter>
    );

    expect(screen.getByText('Social Kit')).toBeInTheDocument();
    expect(screen.getByText('Official Logo')).toBeInTheDocument();
    expect(screen.getByText('#TechStack2026')).toBeInTheDocument();
  });
});
