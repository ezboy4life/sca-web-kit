import styles from './accordion-item.module.scss';
import * as ReactAccordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react/dist/ssr';

export default function AccordionItem({
  question,
  answer,
  value,
}: {
  question: React.ReactNode,
  answer: React.ReactNode,
  value: string,
}) {
  return (
    <ReactAccordion.Item className={styles['accordion-item']} value={value}>
      <ReactAccordion.Trigger
        className={styles['trigger']}
        aria-label='Botão de abrir e fechar'
      >
        <ReactAccordion.Header className={styles['header']}>
          {question}

          <div className={styles['trigger-button']}>
            <PlusIcon className={styles['plus']} weight='bold' />
            <MinusIcon className={styles['minus']} weight='bold' />
          </div>
        </ReactAccordion.Header>
      </ReactAccordion.Trigger>

      <ReactAccordion.Content className={styles['answer']}>{answer}</ReactAccordion.Content>
    </ReactAccordion.Item>
  );
}
