interface BnovoWidgetOptions {
  type: string;
  uid: string;
  lang: string;
  currency: string;
  widp_mobile: string;
  width: string;
  width_mobile: string;
  background: string;
  background_mobile: string;
  bg_alpha: string;
  bg_alpha_mobile: string;
  border_color_mobile: string;
  padding: string;
  padding_mobile: string;
  border_radius: string;
  button_font_size: string;
  button_height: string;
  font_type: string;
  title: string;
  title_mobile: string;
  title_color: string;
  title_color_mobile: string;
  title_size: string;
  title_size_mobile: string;
  inp_color: string;
  inp_bordhover: string;
  inp_bordcolor: string;
  inp_alpha: string;
  btn_background: string;
  btn_background_over: string;
  btn_textcolor: string;
  btn_textover: string;
  btn_bordcolor: string;
  btn_bordhover: string;
  min_age: string;
  max_age: string;
  adults_default: string;
  dates_preset: string;
  dfrom_today: string;
  dfrom_value: string;
  dto_nextday: string;
  dto_value: string;
  cancel_color: string;
  url: string;
  onlyrooms: string;
  firstroom: string;
  hide_minimal_prices: string;
  switch_mobiles: string;
  switch_mobiles_width: string;
}

interface BnovoIframeOptions {
  html_id: string;
  uid: string;
  lang: string;
  width: string;
  height: string;
  rooms: string;
  IsMobile: string;
  scroll_to_rooms: string;
  fixed_header_selector: string;
  fixed_mobile_header_width: number;
  fixed_mobile_header_selector: string;
  fixed_footer_selector: string;
  fixed_mobile_footer_width: number;
  fixed_mobile_footer_selector: string;
}

interface BnovoWidget {
  init(callback: () => void): void;
  open(containerId: string, options: BnovoWidgetOptions): void;
}

interface BnovoIframe {
  new (options: BnovoIframeOptions): { init: () => void };
}

declare global {
  interface Window {
    Bnovo_Widget?: BnovoWidget;
    BookingIframe?: BnovoIframe;
  }
}

// src/types/bnovo.d.ts (или аналогичный файл)

interface BnovoIframeOptions {
  html_id: string;
  uid: string;
  lang: string;
  width: string;
  height: string;
  rooms: string;
  IsMobile: string;
  scroll_to_rooms: string;
  fixed_header_selector: string;
  fixed_mobile_header_width: number;
  fixed_mobile_header_selector: string;
  fixed_footer_selector: string;
  fixed_mobile_footer_width: number;
  fixed_mobile_footer_selector: string;
}

interface BnovoIframeConstructor {
  new (options: BnovoIframeOptions): { init: () => void };
}

declare global {
  interface Window {
    BookingIframe?: BnovoIframeConstructor;
  }
}
