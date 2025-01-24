import { DeliveryForm } from '@/answer/practice_9/DeliveryForm';
import { FormField } from '@/answer/practice_9/FormField';
import { SelectField } from '@/answer/practice_9/SelectField';
import React, { useEffect, useState } from 'react';

export const Answer9 = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: 1,
    deliveryMethod: '通常配送',
    address: '',
    deliveryDate: '',
    storeName: '',
  });

  // 配送方法の選択肢
  const [deliveryOptions, setDeliveryOptions] = useState([
    { label: '通常配送', value: '通常配送', disabled: false },
    { label: 'お急ぎ配送', value: 'お急ぎ配送', disabled: false },
    { label: '店舗受け取り', value: '店舗受け取り', disabled: false },
  ]);

  // 数量に応じて配送方法の選択肢を動的に変更
  useEffect(() => {
    const updatedOptions = deliveryOptions.map((option) => ({
      ...option,
      disabled: option.value === '店舗受け取り' && formData.quantity > 10,
    }));

    setDeliveryOptions(updatedOptions);

    // 「店舗受け取り」が選択されている場合、自動的に「通常配送」に切り替え
    if (formData.quantity > 10 && formData.deliveryMethod === '店舗受け取り') {
      setFormData((prev) => ({
        ...prev,
        deliveryMethod: '通常配送',
      }));
    }
  }, [formData.quantity]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="商品名"
        name="productName"
        type="text"
        value={formData.productName}
        onChange={handleChange}
      />
      <FormField
        label="数量"
        name="quantity"
        type="number"
        value={formData.quantity}
        onChange={handleChange}
      />
      <SelectField
        label="配送方法"
        name="deliveryMethod"
        value={formData.deliveryMethod}
        options={deliveryOptions}
        onChange={handleChange}
      />
      <DeliveryForm
        deliveryMethod={formData.deliveryMethod}
        address={formData.address}
        deliveryDate={formData.deliveryDate}
        storeName={formData.storeName}
        onChange={handleChange}
      />
      <button type="submit">送信</button>
    </form>
  );
};
