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
        <Button type="submit" size="md" className='bg-yellow-300 text-black hover:bg-yellow-400 hover:text-black'>
          Send message
        </Button>
      </Group>
    </form>
    <div className='ps-2 pt-4 sm:pt-1 sm:w-1/2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.476465318663!2d78.51066897434424!3d17.532487698610506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85f0d31dcc6b%3A0x40e03cb1fbed7b03!2sDECCAN%20CYCLE%20MART%20(%20sales%20%26%20service)!5e0!3m2!1sen!2sin!4v1727376736024!5m2!1sen!2sin"  allowFullScreen="" className="h-60 sm:h-full w-full " loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  );
}