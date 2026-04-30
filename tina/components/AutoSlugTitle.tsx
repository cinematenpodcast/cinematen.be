import React, { useEffect, useRef } from 'react';

interface AutoSlugTitleProps {
  field: any;
  input: any;
  form: any;
}

function generateSlug(title: string): string {
  if (!title) return '';
  return title
    .trim()
    .replace(/[^A-Za-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

export function AutoSlugTitle({ field, input, form }: AutoSlugTitleProps) {
  const previousTitleRef = useRef<string>('');

  useEffect(() => {
    const titleValue = input.value;
    if (titleValue && titleValue !== previousTitleRef.current) {
      const newSlug = generateSlug(titleValue);
      previousTitleRef.current = titleValue;
      if (newSlug) {
        form.change('slug', newSlug);
      }
    }
  }, [input.value, form]);

  return (
    <input
      {...input}
      type="text"
      className={input.className}
    />
  );
}
