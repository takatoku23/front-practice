import { FormField } from "@/answer/practice_9/FormField";

type DeliveryFormProps = {
  deliveryMethod: string;
  address: string;
  deliveryDate: string;
  storeName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DeliveryForm = ({
  deliveryMethod,
  address,
  deliveryDate,
  storeName,
  onChange,
}: DeliveryFormProps) => (
  <>
    {(deliveryMethod === '通常配送' || deliveryMethod === 'お急ぎ配送') && (
      <FormField
        label="配送先住所"
        name="address"
        type="text"
        value={address}
        onChange={onChange}
      />
    )}
    {deliveryMethod === 'お急ぎ配送' && (
      <FormField
        label="配送希望日"
        name="deliveryDate"
        type="datetime-local"
        value={deliveryDate}
        onChange={onChange}
      />
    )}
    {deliveryMethod === '店舗受け取り' && (
      <FormField
        label="店舗名"
        name="storeName"
        type="text"
        value={storeName}
        onChange={onChange}
      />
    )}
  </>
);
