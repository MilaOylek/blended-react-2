import type { FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

interface FormProps {
  onSubmit: (query: string) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    const query = input.value.trim();

    if (query) {
      onSubmit(query);
      form.reset();
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};

export default Form;
