function ErrorDisplay({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded mb-4 text-center">
      {message}
    </div>
  );
}

export default ErrorDisplay;
