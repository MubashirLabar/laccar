function SpinLoader({ className }) {
  return (
    <div
      className={`w-8 h-8 rounded-full animate-spin border-2 border-solid border-primary-700 border-t-transparent ${className}`}
    />
  );
}

export default SpinLoader;
