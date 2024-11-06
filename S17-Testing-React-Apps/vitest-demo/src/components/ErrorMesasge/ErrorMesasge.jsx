function ErrorMesasge({ count }) {
  return (
    <div>
      <p>
        {count} {count === 1 ? "error" : "errors"} occured.
      </p>
    </div>
  );
}
export default ErrorMesasge;
