import { Tag } from '@dexma/ui-components';
import './Toast.css';

export const Toast = ({ label }) => {
  return (
    <div className="toast">
      <Tag color="gray" variant="outline">{label}</Tag>
    </div>
  )
};