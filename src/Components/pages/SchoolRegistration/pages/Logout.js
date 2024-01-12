import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      localStorage.clear();

      navigate("/schoolregist");
    };

    logout().then(() => {
      setLoading(false);
    });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      ) : (
        <p className="text-center">Logout successful. Redirecting...</p>
      )}
    </div>
  );
};

export default Logout;
