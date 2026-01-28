"use client";

import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";

type RegistrationFormProps = {
  onClose: () => void;
};

export const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted", formData);

    onClose();
  };

  return (
    <Form className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        label="Email"
        name="email"
        placeholder="Введите почту"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((form) => ({ ...form, email: e.target.value }))
        }
        validate={(val) => {
          if (!val) return "Почта обязательна";
          if (!validateEmail(val)) return "Почта не корректна";
          return null;
        }}
      />
      <Input
        isRequired
        label="Password"
        name="password"
        placeholder="Введите пароль"
        type="password"
        value={formData.password}
        onValueChange={(val) =>
          setFormData((form) => ({ ...form, password: val }))
        }
        validate={(val) => {
          if (!val) return "Пароль обязателен";
          if (val.length < 6) return "Пароль должен быть не менее 6 символов";
          return null;
        }}
      />
      <Input
        isRequired
        label="confirmPassword"
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        type="password"
        value={formData.confirmPassword}
        onValueChange={(val) =>
          setFormData((form) => ({ ...form, confirmPassword: val }))
        }
        validate={(val) => {
          if (!val) return "Пароль для подтвержедениия обязателен";
          if (val !== formData.password) return "Пароль не совпадает";
          return null;
        }}
      />
      <div className="flex gap-4 w-full justify-end mt-2.5">
        <Button type="submit" color="primary">
          Зарегестрироваться
        </Button>
        <Button color="primary" variant="bordered" onPress={onClose}>
          Отмена
        </Button>
      </div>
    </Form>
  );
};
