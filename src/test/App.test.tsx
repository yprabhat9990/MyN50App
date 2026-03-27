import App from '../App';
import { appRouteObjects } from '../router-config';
import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { describe, expect, it } from 'vitest';

function renderAppAt(initialPath: string) {
  const router = createMemoryRouter(appRouteObjects, { initialEntries: [initialPath] });
  return render(<RouterProvider router={router} />);
}

describe('App', () => {
  it('renders the home route with the marketing hero heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Connect Online\. Meet Offline\. Live Fully\./,
      })
    ).toBeInTheDocument();
  });

  it('renders the About page hero for /about', async () => {
    renderAppAt('/about');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /A Conscious Restart/i,
      })
    ).toBeInTheDocument();
  });

  it('renders Contact Us for /contact', async () => {
    renderAppAt('/contact');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /^Contact Us$/,
      })
    ).toBeInTheDocument();
  });

  it('renders the policies hub for /policies', async () => {
    renderAppAt('/policies');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /^Policies$/,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Official legal and community policies/i)).toBeInTheDocument();
  });

  it('renders the resources hub for /resources', async () => {
    renderAppAt('/resources');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /^Resources$/,
      })
    ).toBeInTheDocument();
  });

  it('renders the wisdom library marketing page for /resources/library', async () => {
    renderAppAt('/resources/library');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /Second Half/i,
      })
    ).toBeInTheDocument();
  });

  it('renders 404 for unknown paths', async () => {
    renderAppAt('/this-route-does-not-exist');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /Page not found/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Error 404')).toBeInTheDocument();
  });

  it('renders a placeholder page for unimplemented nav routes', async () => {
    renderAppAt('/blogs');
    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /^Blogs$/,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Content coming soon/i)).toBeInTheDocument();
  });
});
