import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 as uuid } from "uuid";
import { postEvent } from "@/lib/dbFunctions";
import { useNavigate } from "react-router-dom";
import { phoneRegex } from "@/lib/utils";

const formSchema = z.object({
  id: z.string().min(8).max(8),
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(255),
  image: z
    .string({
      required_error: "Please paste image URL!",
    })
    .url(),
  eventCategory: z.string({
    required_error: "Please select category of the event!",
  }),
  eventDateTime: z.string({
    required_error: "Please specify date and time of the event!",
  }),
  location: z.string({
    required_error: "Please type location of the event!",
  }),
  phone: z
    .string({
      required_error: "Please type the phone number!",
    })
    .regex(phoneRegex, "Invalid Number!"),
  email: z
    .string({
      required_error: "Please type email for contact!",
    })
    .email(),
});

const NewEventView = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: uuid().slice(0, 8),
      title: "",
      description: "",
      image: "",
      eventCategory: "",
      eventDateTime: "",
      location: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    postEvent(values);
    navigate("/events");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event title</FormLabel>
              <FormControl>
                <Input placeholder="Title of event" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell something about the event..."
                  className="resize-none"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https..." {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                required
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an event category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sport">Sport</SelectItem>
                  <SelectItem value="culture">Culture</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDateTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of event</FormLabel>
              <FormControl>
                <Input
                  type="datetime-local"
                  placeholder="shadcn"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location of event</FormLabel>
              <FormControl>
                <Input placeholder="Location" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Type your phone number..."
                  pattern="[0-9]{9}"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type mail for contact"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mr-2">
          Submit
        </Button>
        <Button variant={"outline"} type="button" onClick={form.reset}>
          Clear
        </Button>
      </form>
    </Form>
  );
};

export default NewEventView;
