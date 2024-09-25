import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import submitData from '../submittData';

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
    <h1 className='p-4 text-4xl sm:text-6xl font-bold' id='contact'>
        Get in touch
    </h1>
    <div className='mx-2 sm:flex mb-8'>
    <form onSubmit={form.onSubmit((e) => {
        console.log(e)
        submitData(e).then(()=>{
            form.reset()
        })
    })} className='sm:w-1/2'>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
    <div className='ps-2 pt-4 sm:pt-1 sm:w-1/2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17039.356336238223!2d78.48910739026753!3d17.50415426659509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9af4fd761e0b%3A0x36718daaf9b3af0e!2sAlwal%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1727195970527!5m2!1sen!2sin"  allowFullScreen="" className="h-60 sm:h-full w-full " loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  );
}