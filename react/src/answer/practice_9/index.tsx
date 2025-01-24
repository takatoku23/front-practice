import React, { useState, useEffect } from 'react';

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
      disabled: option.value === '店舗受け取り' && formData.quantity > 10, // 数量が10を超えた場合は無効化
    }));

    setDeliveryOptions(updatedOptions);

    // 「店舗受け取り」が選択されている場合は「通常配送」に切り替える
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
      [name]: type === 'number' ? Math.max(1, Number(value)) : value, // 数量は1以上
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>商品名:</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>数量:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1" // 最小値1
        />
      </div>
      <div>
        <label>配送方法:</label>
        <select
          name="deliveryMethod"
          value={formData.deliveryMethod}
          onChange={handleChange}
        >
          {deliveryOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {formData.deliveryMethod !== '店舗受け取り' && (
        <div>
          <label>配送先住所:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      )}
      {formData.deliveryMethod === 'お急ぎ配送' && (
        <div>
          <label>配送希望日:</label>
          <input
            type="datetime-local"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
          />
        </div>
      )}
      {formData.deliveryMethod === '店舗受け取り' && (
        <div>
          <label>店舗名:</label>
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
          />
        </div>
      )}
      <button type="submit">送信</button>
    </form>
  );
};
