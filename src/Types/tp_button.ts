export interface ButtonProps {
  variant: 'standard' | 'icon';
  size: 'M' | 'S' | 'XS';
  color: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'alpha_light' | 'alpha_dark';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  badge?: number;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
}