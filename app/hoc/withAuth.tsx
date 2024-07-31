// hoc/withAuth.tsx
import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Wrapper = (props: P) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        // const authToken = localStorage.getItem("token");
        const authToken = true;
        if (!authToken) {
          router.push("/"); // Redirect to login or home page
        } else {
          setLoading(false); // User is authenticated, set loading to false
        }
      };

      checkAuth();
    }, [router]);

    // Render null or a basic loading component while checking auth
    if (loading) {
      return null; // Or a minimal skeleton screen or placeholder
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
