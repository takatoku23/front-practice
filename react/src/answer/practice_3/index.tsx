export const Answer3 = () => {
  let isLoggedIn: boolean = true; // or false for testing
  return <>{isLoggedIn ? "Welcome back!" : "Please sign in."}</>;
};
