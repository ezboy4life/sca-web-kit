import styles from './accordion.module.scss';
import * as ReactAccordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react/dist/ssr';

export default function Accordion({
  question,
  answer,
  value,
}: {
  question: React.ReactNode,
  answer: React.ReactNode,
  value: string,
}) {
  return (
    <ReactAccordion.Item value={value} className={styles['accordion']} >
      <ReactAccordion.Trigger className={styles['open-button']} aria-label='Botão para encolher ou expandir a pergunta frequente'>
        <ReactAccordion.Header className={styles['accordion-header']}>
          {question}
          <div className={styles['trigger']}>
            <PlusIcon size={20} color='white' weight='bold' className={styles['plus']} />
            <MinusIcon size={20} color='white' weight='bold' className={styles['minus']} />
          </div>
        </ReactAccordion.Header>
      </ReactAccordion.Trigger>

      <ReactAccordion.Content className={styles['answer']}>{answer}</ReactAccordion.Content>
    </ReactAccordion.Item>
  );
}
