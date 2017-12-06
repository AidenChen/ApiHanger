export interface Header {
  index: number;
  key: string;
  value: string;
}

export interface Parameter {
  index: number;
  key: string;
  type: number;
  not_null?: boolean;
  default?: string;
  description: string;
}

export interface Api {
  id: number;
  name: string;
  description: string;
  url: string;
  protocol: number;
  method: number;
  request_type: number;
  response_type: number;
  status: number;
  request_header: Header[];
  request_parameter: Parameter[];
  request_sample: string;
  response_header: Header[];
  response_parameter: Parameter[];
  response_sample: string;
  remark: string;
  category_id: number;
}
