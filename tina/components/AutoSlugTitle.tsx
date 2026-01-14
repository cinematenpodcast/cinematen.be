import React, { useEffect, useRef } from 'react';
import { useForm } from 'tinacms';

interface AutoSlugTitleProps {
  field: any;
  input: any;
}

// Function to convert title to slug (same as createSlug)
function generateSlug(title: string): string {
  if (!title) return '';
  return title
    .trim()
    .replace(/[^A-Za-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

// Custom component that auto-generates slug from title
export function AutoSlugTitle({ field, input }: AutoSlugTitleProps) {
  const form = useForm();
  const titleValue = form.values.title;
  const previousTitleRef = useRef<string>('');

  useEffect(() => {
    if (titleValue && titleValue !== previousTitleRef.current) {
      const newSlug = generateSlug(titleValue);
      previousTitleRef.current = titleValue;
      
      // Always update slug when title changes (auto-sync)
      if (newSlug) {
        form.setFieldValue('slug', newSlug);
      }
    }
  }, [titleValue, form]);

  return (
    <input
      {...input}
      type="text"
      className={input.className}
    />
  );
}
