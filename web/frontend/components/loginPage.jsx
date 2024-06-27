import React, { useState } from "react";
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

export function LoginPage() {
  const [toastProps, setToastProps] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);

    const url = "https://demo.jeebly.com/Shopify/userlogin";
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
        setToastProps({ content: "Login successful", error: false });
        setError("");
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

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
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
              source="https://www.thedigigarage.in/dev/jeebly-app/img/logo.png"
            />
          </LegacyStack>

          <Text as="h4" variant="headingMd">
            <FormLayout>
              <TextField
                type="email"
                label="Jeebly email"
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
              {accessToken && <p>Access Token: {accessToken}</p>}
              <PageActions
                primaryAction={{
                  content: "Login",
                  onClick: handleSubmit,
                }}
              />
            </FormLayout>
          </Text>
        </TextContainer>
        
      </AlphaCard>
    </>
  );
}
