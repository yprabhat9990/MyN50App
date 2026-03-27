import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ErrorBoundaryProps {
  children: ReactNode;
  /** Full-viewport layout for the root shell; narrower “page” area inside HomeLayout. */
  variant?: 'full' | 'content';
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Catches render errors in child components. Does not catch async errors or event handlers
 * (use try/catch there). Pair with `key={pathname}` when used under a router to reset on navigation.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    const { children, variant = 'content' } = this.props;

    if (this.state.hasError && this.state.error) {
      const isFull = variant === 'full';
      return (
        <div
          role="alert"
          className={
            isFull
              ? 'flex min-h-screen flex-col items-center justify-center bg-[var(--brand-app-bg)] px-6 py-16'
              : 'flex min-h-[50vh] flex-col items-center justify-center px-6 py-12'
          }
        >
          <div className="w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900/50 dark:bg-red-950/40">
            <h1 className="text-lg font-semibold text-red-900 dark:text-red-100">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-red-800/90 dark:text-red-200/90">
              This part of the page couldn&apos;t render. You can try again or go back home.
            </p>
            {import.meta.env.DEV && (
              <pre className="mt-4 max-h-40 overflow-auto rounded-lg bg-red-100/80 p-3 text-left text-xs text-red-950 dark:bg-red-950/60 dark:text-red-100">
                {this.state.error.message}
              </pre>
            )}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleRetry}
                className="rounded-lg bg-red-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800 dark:bg-red-100 dark:text-red-950 dark:hover:bg-white"
              >
                Try again
              </button>
              <Link
                to="/"
                className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-900 transition-colors hover:bg-red-100 dark:border-red-700 dark:text-red-100 dark:hover:bg-red-900/50"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}
