import { Button, Card } from "@mui/material";

interface ErrorBoundaryFallbackProps {
  error: string;
  resetErrorBoundary: () => void;
}

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: ErrorBoundaryFallbackProps) => {
  return (
    <Card
      variant="elevation"
      role="alert"
      className="w-full max-w-[462px] sef-center mx-auto p-5 !bg-[#2f3135] flex flex-col gap-4"
    >
      <div>
        <pre className="text-red-500">{"Something went wrong!"}:</pre>
        <pre className="text-red-500">{error}</pre>
      </div>
      <Button
        variant="outlined"
        className="!text-white !border-white font-semibold"
        onClick={resetErrorBoundary}
      >
        {"Try again"}
      </Button>
    </Card>
  );
};

export default ErrorBoundaryFallback;
