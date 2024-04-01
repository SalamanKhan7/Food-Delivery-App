import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h3>Something is gone wrong!!</h3>
      <h3>
        {err.status}-{err.statusText}
      </h3>
    </div>
  );
}

export default Error;
