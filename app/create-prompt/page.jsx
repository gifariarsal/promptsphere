'use client';

import Form from '@/components/Form';
import { useState } from 'react';

const CreatePromptPage = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: '', tag: '' });

  const createPromptHandler = async (e) => {
    console.log('createPromptHandler');
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPromptHandler}
    />
  );
};

export default CreatePromptPage;
