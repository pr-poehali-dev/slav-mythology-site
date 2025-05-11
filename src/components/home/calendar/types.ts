
/**
 * Типы данных для компонентов календаря
 */

/**
 * Праздник в славянском календаре
 */
export type Holiday = {
  id: number;
  name: string;
  date: string;
  description: string;
};

/**
 * Сезон в славянском календаре
 */
export type Season = {
  id: string;
  name: string;
  description: string;
  color: string;
  holidays: Holiday[];
  icon: string;
};
