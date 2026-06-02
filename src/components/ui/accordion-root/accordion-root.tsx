import * as ReactAccordion from '@radix-ui/react-accordion';

export default function AccordionRoot(
  {
    type = 'single',
    className,
    collapsible,
    children,
  }: {
    type?: 'single' | 'multiple',
    className?: string,
    collapsible?: boolean,
    children?: React.ReactNode,
  }
) {
  return (
    <ReactAccordion.Root
      type={type}
      className={className}
      collapsible={collapsible}
    >
      {children}
    </ReactAccordion.Root>
  )
}
