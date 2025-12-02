import styles from './accordion.module.scss';
import * as Accordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react/dist/ssr';

export default function StyledAccordion({
  question,
  answer,
}: {
  question: string,
  answer: string,
}) {
  return (
    <Accordion.Root type="single" collapsible className={styles['accordion']}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className={styles['open-button']} aria-label='Botão para encolher ou expandir a pergunta frequente'>
          <Accordion.Header className={styles['accordion-header']}>
            {question}
            <div className={styles['trigger']}>
              <PlusIcon size={20} color='white' weight='bold' className={styles['plus']} />
              <MinusIcon size={20} color='white' weight='bold' className={styles['minus']} />
            </div>
          </Accordion.Header>
        </Accordion.Trigger>
        <Accordion.Content className={styles['answer']}>{answer}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
