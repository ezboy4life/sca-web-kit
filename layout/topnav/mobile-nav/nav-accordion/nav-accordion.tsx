import styles from './nav-accordion.module.scss';
import * as Accordion from '@radix-ui/react-accordion';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

export default function NavAccordion(
  {
    title,
    children
  }: {
    title: string,
    children?: React.ReactNode,
  }
) {
  return (
    <Accordion.Root type="single" collapsible className={styles['nav-accordion']}>
      <Accordion.Item value="item-1">

        <Accordion.Trigger className={styles['nav-accordion-trigger']}>
          <Accordion.Header className={styles['nav-accordion-header']}>
            <p>{title}</p>
          </Accordion.Header>
          <CaretDown size={18} className={styles['caret-down']} />
        </Accordion.Trigger>

        <Accordion.Content className={styles['nav-accordion-content']}>
          <div className={styles['nav-accordion-links-wrapper']}>
            {children}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
