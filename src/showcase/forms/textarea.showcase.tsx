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
import { Textarea } from "@/components/ui/forms/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchNormal1 } from "iconsax-reactjs";
import { X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export function TextareaVariants() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Textarea variant={`bordered`} placeholder="Bordered textarea" />
      <Textarea variant={`solid`} placeholder="Solid textarea" />
      <Textarea variant={`underlined`} placeholder="Underlined textarea" />
      <Textarea variant={`faded`} placeholder="Faded textarea" />
    </div>
  );
}

export function TextareaSizes() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Textarea size={`xs`} placeholder="Extra small textarea" />
      <Textarea size={`sm`} placeholder="Small textarea" />
      <Textarea size={`md`} placeholder="Medium textarea" />
      <Textarea size={`lg`} placeholder="Large textarea" />
    </div>
  );
}

export function TextareaStates() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Textarea state={`default`} placeholder="Default state" />
      <Textarea state={`error`} placeholder="Error state" />
      <Textarea state={`success`} placeholder="Success state" />
      <Textarea state={`warning`} placeholder="Warning state" />
    </div>
  );
}

export function TextareaAffixes() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      <Textarea
        placeholder="Search description..."
        prefix={<SearchNormal1 className="size-4" />}
      />

      <Textarea
        placeholder="Add notes..."
        suffix={<SearchNormal1 className="size-4" />}
      />

      <Textarea
        placeholder="Enter bio"
        suffix={`characters`}
        suffixClassName="top-2.5"
      />

      <Textarea
        prefix={`https://`}
        prefixClassName="top-2.5"
        placeholder="Enter description"
      />

      <Textarea
        placeholder="Enter amount description"
        suffix={
          <select className="bg-transparent">
            <option>$</option>
            <option>€</option>
          </select>
        }
      />
    </div>
  );
}

export function TextareaAutoResize() {
  const [value, setValue] = useState("");

  return (
    <div className="grid sm:grid-cols-2 gap-5 p-5">
      <div className="flex flex-col gap-3">
        <Textarea
          placeholder="This textarea auto-resizes as you type..."
          autoResize={true}
          value={value}
          onValueChange={setValue}
        />
        <p className="truncate text-sm">Current value: {value}</p>
      </div>

      <div className="flex flex-col gap-3">
        <Textarea
          placeholder="Fixed height textarea (default behavior)"
          autoResize={false}
          rows={4}
        />
        <p className="text-sm text-muted-foreground">
          Standard textarea with fixed height
        </p>
      </div>
    </div>
  );
}

export function TextareaControlled() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="grid sm:grid-cols-2 gap-5 p-5 items-start">
      {/* Info for the user */}
      <p className="text-sm text-muted-foreground col-span-2">
        This demonstrates <strong>controlled textareas</strong>. You can manage
        the value using either <strong>onChange</strong> (native React event) or{" "}
        <strong>onValueChange</strong> (custom simple callback). Suffixes and
        prefixes can also be interactive.
      </p>

      {/* Using onValueChange */}
      <div className="flex flex-col gap-3">
        <Textarea
          placeholder="Type something..."
          value={value}
          onValueChange={setValue}
        />
        <p className="truncate text-sm">Character count: {value.length}</p>
      </div>

      {/* Using native onChange with interactive suffix */}
      <div className="flex flex-col gap-3">
        <Textarea
          placeholder="Type something..."
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          suffix={
            value2.length > 0 && (
              <Button
                onClick={() => setValue2("")}
                variant="flat"
                color="danger"
                size="sm"
              >
                clear <X />
              </Button>
            )
          }
          suffixClassName="top-1 right-1"
        />
        <p className="truncate text-sm">Character count: {value2.length}</p>
      </div>
    </div>
  );
}

export function TextareaCharacterLimit() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="flex flex-col gap-4 w-full max-w-md p-5">
      <div className="flex flex-col gap-2">
        <Textarea
          placeholder="Enter your message (max 200 characters)..."
          value={value}
          onValueChange={setValue}
          state={value.length > maxLength ? "error" : "default"}
          suffix={
            <span
              className={`text-xs ${value.length > maxLength ? "text-danger" : "text-muted-foreground"}`}
            >
              {value.length}/{maxLength}
            </span>
          }
        />

        {value.length > maxLength && (
          <p className="text-danger text-sm">
            Exceeded character limit by {value.length - maxLength} characters
          </p>
        )}
      </div>
    </div>
  );
}

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(200),
});

export function TextareaWithForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: z.output<typeof formSchema>) => {
    if (loading) return;
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.reset();
      alert("Form submited successfully");
    }, 2000);
  };

  return (
    <div className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-md p-5 m-auto border border-border rounded-xl"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter title"
                    type="text"
                    state={fieldState.error ? "error" : "default"}
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
            name="description"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter detailed description..."
                    autoResize
                    state={fieldState.error ? "error" : "default"}
                    suffix={
                      <span
                        className={`text-xs ${field.value.length > 200 ? "text-danger" : "text-muted-foreground"}`}
                      >
                        {field.value.length}/{200}
                      </span>
                    }
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" loading={loading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
