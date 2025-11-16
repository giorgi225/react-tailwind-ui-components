"use client";
import { Button } from "@/components/ui/common/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/forms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EyeSlash,
  Location,
  Money2,
  SearchNormal1,
  User,
} from "iconsax-reactjs";
import { EyeIcon, Mail, X } from "lucide-react";
import numeral from "numeral";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export function InputVariants() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Input variant={`bordered`} placeholder="Bordered" />
      <Input variant={`solid`} placeholder="Solid" />
      <Input variant={`underlined`} placeholder="Underlined" />
      <Input variant={`faded`} placeholder="Faded" />
    </div>
  );
}

export function InputSizes() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Input size={`xs`} placeholder="Extra small" />
      <Input size={`sm`} placeholder="Small" />
      <Input size={`md`} placeholder="Medium" />
      <Input size={`lg`} placeholder="Large" />
    </div>
  );
}

export function InputStates() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Input state={`default`} placeholder="Default" />
      <Input state={`error`} placeholder="Error state" />
      <Input state={`success`} placeholder="Success state" />
      <Input state={`warning`} placeholder="Warning state" />
    </div>
  );
}

export function InputAffixes() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Input
        placeholder="Search..."
        prefix={<SearchNormal1 className="w-5 h-5" />}
      />

      <Input
        placeholder="Search..."
        suffix={<SearchNormal1 className="w-5 h-5" />}
      />

      <Input placeholder="Enter email" suffix={`@gmail.com`} />

      <Input prefix={`www.`} placeholder="Enter domain" suffix={`.com`} />

      <Input
        type="amount"
        placeholder="Enter Amount"
        suffix={
          <select>
            <option>$</option>
            <option>€</option>
          </select>
        }
      />
    </div>
  );
}

export function InputInteractive() {
  const [type, setType] = useState<"password" | "text">("password");

  const togglePassword = () => {
    setType((type) => (type === "password" ? "text" : "password"));
  };

  return (
    <div className="grid sm:grid-cols-2 gap-5 p-5">
      <Input
        type={type}
        placeholder="Enter Password"
        suffixClassName="right-1.5"
        suffix={
          <Button variant={`flat`} onClick={togglePassword} size="xs_icon">
            {type === "password" ? <EyeIcon /> : <EyeSlash />}
          </Button>
        }
      />
    </div>
  );
}

export function InputControlled() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="grid sm:grid-cols-2 gap-5 p-5 items-start">
      {/* Info for the user */}
      <p className="text-sm text-muted-foreground col-span-2">
        This demonstrates <strong>controlled inputs</strong>. You can manage the
        value using either <strong>onChange</strong> (native React event) or{" "}
        <strong>onValueChange</strong> (custom simple callback). Suffixes and
        prefixes can also be interactive.
      </p>

      {/* Using onValueChange */}
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Type something..."
          value={value}
          onValueChange={setValue}
        />
        <p className="truncate text-sm">Current value: {value}</p>
      </div>

      {/* Using native onChange with interactive suffix */}
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Type something..."
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          suffix={
            value2.length > 0 && (
              <Button
                onClick={() => setValue2("")}
                variant="ghost"
                color="danger"
                size="sm"
              >
                clear <X />
              </Button>
            )
          }
          suffixClassName="right-0.5"
        />
        <p className="truncate text-sm">Current value: {value2}</p>
      </div>
    </div>
  );
}

export function InputAmount() {
  const [value, setValue] = useState("10000");

  const presetValues = ["10000", "20000", "30000"];

  const handlePresetClick = (val: string) => {
    setValue(val);
  };

  const handleReset = () => setValue("");

  return (
    <div className="flex flex-col gap-4 w-full max-w-md p-5">
      <div className="flex flex-col gap-2">
        <Input
          type="amount"
          placeholder="Enter amount..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          suffix={`USD`}
        />

        <div className="flex flex-wrap gap-1 ml-auto">
          {presetValues.map((val) => (
            <Button
              key={val}
              size="xs"
              color={value === val ? "primary" : "secondary"}
              variant={value === val ? "solid" : "outline"}
              onClick={() => handlePresetClick(val)}
            >
              {numeral(val).format("0,0")}
            </Button>
          ))}
          <Button size="xs" color="danger" variant="flat" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>

      <p className="truncate text-sm text-muted-foreground mt-1">
        Current value: {value ?? "—"}
      </p>
    </div>
  );
}

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  nickname: z.string().min(1, "Please enter a nickname."),
  address: z.string().min(1, "Please enter the address."),
  amount: z.number().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export function InputWithForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      nickname: "",
      address: "",
      amount: 0,
    },
  });

  async function onSubmit(values: FormValues) {
    if (loading) return;
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.reset();
      alert("Form submited successfully");
    }, 2000);
  }

  return (
    <div className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-md p-5 m-auto border border-border rounded-xl"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    variant={`faded`}
                    placeholder="john@example.com"
                    prefix={<Mail className="size-4" />}
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nickname</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    variant={`faded`}
                    placeholder="Your nickname"
                    prefix={<User className="size-4" />}
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    variant={`faded`}
                    placeholder="Enter your address"
                    prefix={<Location className="size-4" />}
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    type="amount"
                    variant={`faded`}
                    state={fieldState.error ? "error" : "default"}
                    placeholder="0.00"
                    prefix={<Money2 className="size-4" />}
                    {...field}
                    disabled={loading}
                    onChange={(e) => {
                      field.onChange(Number(e.target.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" loading={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
