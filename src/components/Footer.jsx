import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconMapPin } from '@tabler/icons-react';


export function FooterSocial() {
  return (
    <div className="pt-10 bg-slate-600 pb-8">
      <Container className="flex justify-between">
        {/* logo */}
        <div>
            <h1 className='font-bold text-white text-lg'>
                Deccan cycle mart
            </h1>
            <div className='mt-2 text-gray-300 flex gap-1'>
            <IconMapPin stroke={1} size={25} className='mt-0.5' /> 
            <p className='text-xs w-[20ch]'>
            temple alwal opposite police station 
            </p>
            </div>

        </div>
        <Group gap={0}  justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}