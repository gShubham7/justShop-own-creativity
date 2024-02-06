import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/auth/auth.actions";
import { signInWithGoogle } from "../config/firbase";
import Loading from "../components/Loding";

const Login = () => {
  const { isAuth, loading, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [loginCreds, setLoginCreds] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!loginCreds.email || !loginCreds.password) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      dispatch(login(loginCreds));
    }
  };

  const handleGoogle = () => {
    signInWithGoogle();
    toast({
      title: "Logged in successfully",
      description: "Go and get exciting offers...",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(login());
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return navigate("/login");
  }
  if (isAuth) {
    return navigate("/");
  }

  return (
    <HStack w="full">
      <VStack
        spacing={2}
        w="100vh"
        padding={{ base: "20px", md: "50px 100px" }}
        height="100vh"
      >
        <Stack w="full" textAlign="left">
          <Text marginTop={50} fontSize="xl" fontWeight="semibold">
            Sign In
          </Text>
          <Text fontSize="sm"></Text>
        </Stack>

        <Stack spacing={2} w="full">
          <ButtonGroup size="md" isAttached variant="outline">
            <IconButton aria-label="Add to friends">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                w={25}
              />
            </IconButton>
            <Button
              w="full"
              colorScheme="messenger"
              variant="solid"
              onClick={handleGoogle}
            >
              Sign In With Google
            </Button>
          </ButtonGroup>

          <ButtonGroup size="md" isAttached variant="outline">
            <IconButton aria-label="Add to friends">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png"
                w={25}
              />
            </IconButton>
            <Button
              onClick={handleGoogle}
              w="full"
              bg="blackAlpha.600"
              color="white"
              variant="solid"
            >
              Sign In With Email
            </Button>
          </ButtonGroup>
        </Stack>

        <HStack spacing={2} w="full">
          <Divider minW={1} />
          <Text w="full" fontSize="12px" color="gray.600">
            {" "}
            Or, sign in with email
          </Text>
          <Divider minW={1} />
        </HStack>

        <Stack spacing={2} w="full">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Your Email..."
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Password..."
              name="password"
              onChange={handleChange}
            />
          </FormControl>

          <Checkbox defaultChecked>Keep Me Logged in</Checkbox>
        </Stack>

        <Stack textAlign="left" spacing={2} w="full">
          <Text fontSize="15px" color="blue" as="u">
            Forgot Password
          </Text>
          <Button
            onClick={handleClick}
            w="full"
            colorScheme="facebook"
            variant="solid"
          >
            Sign In
          </Button>
        </Stack>
      </VStack>

      <VStack
        textAlign="left"
        w="full"
        padding={50}
        height="100vh"
        bg="#ebeef9"
        display={{ base: "none", md: "block" }}
        bgImage="./SignIn.gif"
        bgSize="cover"
        color="black"
      >
        <HStack>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            marginTop={50}
            maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
            paddingBottom="40px"
          >
            Welcome to
          </Text>
          <Image
            width={{ base: "80%", md: "40%", lg: "20%" }}
            src="./Project Logo.png"
          />
        </HStack>
        <Text width="full" fontSize="22px" fontWeight="semibold">
          Sign In to explore more about justShop
        </Text>
        <Text
          width="full"
          fontSize="15px"
          fontWeight="thin"
          maxWidth={{ base: "100%", md: "40%", lg: "40%" }}
        >
          If you are a new visitor to our website simply register yourself
          here...
        </Text>

        <Link to="/register">
          <Button colorScheme="facebook" variant="solid">
            Create new account
          </Button>
        </Link>
      </VStack>
    </HStack>
  );
};

export default Login;
