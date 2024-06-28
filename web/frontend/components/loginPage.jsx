
import React, { useState, useEffect } from "react";
import {
  TextContainer,
  Text,
  FormLayout,
  TextField,
  PageActions,
  AlphaCard,
  Thumbnail,
  LegacyStack,
} from "@shopify/polaris";

import { Toast } from "@shopify/app-bridge-react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [toastProps, setToastProps] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );

  const navigate = useNavigate(); // useNavigate hook from react-router-dom

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  const handleSubmit = async () => {
    setIsLoading(true);

    const url = "https://demo.jeebly.com/app/userlogin";
    const params = new URLSearchParams({
      login_id: username,
      password: password,
      merchant_token: "213123",
      store_id: "123123",
      store_name: "123123",
      store_url: "123123",
    });

    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: "ci_session=3plmnhchcsmlungpv0cgnnkp16dnqvio",
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: params.toString(),
      });

      console.log("Response status:", response.status);
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        const { token } = responseBody; 
        setAccessToken(token); 
        localStorage.setItem("accessToken", token);
        setToastProps({ content: "Login successful", error: false });
        setError("");
        navigate("/home"); // Redirect to home page on successful login
      } else {
        setError(responseBody.message || "Login failed");
        setToastProps({ content: "Login failed", error: true });
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error");
      setToastProps({ content: "Network error", error: true });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    setUsername("");
    setPassword("");
    setToastProps({ content: "Logged out successfully", error: false });
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleRegisterClick = () => {
    window.location.href = 'https://www.example.com'; 
  };

  const toastMarkup = toastProps.content && (
    <Toast {...toastProps} onDismiss={() => setToastProps({})} />
  );

  return (
    <>
      {toastMarkup}
      <AlphaCard style={{ padding: "20px" }}>
        <TextContainer spacing="loose">
          <LegacyStack
            vertical
            distribution="center"
            alignment="center"
            style={{ height: "100vh" }}
          >
            <Thumbnail
              source={"assets/logoipsum-332.svg"}
            />
          </LegacyStack>

          <Text as="h4" variant="headingMd">
            <FormLayout>
              {!accessToken ? (
                <>
                  <TextField
                    type="email"
                    label="Email"
                    value={username}
                    onChange={handleUsernameChange}
                    autoComplete="email"
                  />
                  <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="current-password"
                  />
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <PageActions
                    primaryAction={{
                      content: "Login",
                      onClick: handleSubmit,
                      loading: isLoading,
                    }}
                  />
                  <PageActions
                  primaryAction={{
                    content: 'Register',
                    onClick: handleRegisterClick,
                  }}
                 />
                </>
              ) : (
                <>
                  <p>You are logged in</p>
                  <PageActions primaryAction={{ content: "Logout", onClick: handleLogout }} />
                </>
              )}
            </FormLayout>
          </Text>
        </TextContainer>
      </AlphaCard>
    </>
  );
}

