function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-600 border-solid"></div>
      <span className="ml-3 text-indigo-600">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
