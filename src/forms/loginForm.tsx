"use client";

import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";

type LoginFormProps = {
  onClose: () => void;
};

export const LoginForm = ({ onClose }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
          return null;
        }}
      />

      <div className="flex gap-4 w-full justify-end mt-2.5">
        <Button type="submit" color="primary">
          Войти
        </Button>
        <Button color="primary" variant="bordered" onPress={onClose}>
          Отмена
        </Button>
      </div>
    </Form>
  );
};
