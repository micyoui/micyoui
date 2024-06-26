import { ReactNode } from 'react';

export type AbilityProviderProps = {
  /** Default abilities */
  list?: string[];
  /** Persistent abilities list with local storage */
  persistent?: boolean;
  /** Content */
  children?: ReactNode;
};

export interface CanProps {
  /** Ability name */
  i: string;
  /** Content */
  children?: ReactNode;
}

export interface CannotProps extends CanProps {}

export interface UseAbility {
  /** All abilities */
  abilities: string[];
  /** Update abilities state */
  setAbilities: Function;
  /** Add new ability */
  addAbility(ability: string): void;
  /** Add abilities */
  addAbilities(abilities: string[]): void;
  /** Remove ability from abilities */
  removeAbility(ability: string): void;
  /** Remove some abilities from abilities */
  removeAbilities(abilities: string[]): void;
  /** Clear all abilities */
  clearAbilities(): void;
  /** Check has ability */
  can(ability: string): boolean;
}
