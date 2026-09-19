import { Service } from '@angular/core';
import { Product } from './product-model';
import { HttpErrorResponse } from '@angular/common/http';

@Service()
export class ProductsService {
  private readonly _products: Product[] = [
    {
      id: 'PRD-001',
      name: 'ワイヤレスヘッドホン',
      category: 'オーディオ',
      description: '周囲の音を抑えて、音楽や作業に集中。最大30時間の連続再生に対応します。',
      price: 12800,
      stock: 12,
      image: '/images/small/mesakc-headphone-4004450_640.jpg',
      features: [
        'ノイズキャンセリング機能で周囲の音を抑えます。',
        '最大30時間の連続再生に対応。',
        '耳を包み込むクッションで快適な装着感。',
      ],
      specifications: [
        { label: '接続方式', value: 'Bluetooth / 有線' },
        { label: '連続再生時間', value: '最大30時間' },
        { label: '充電端子', value: 'USB Type-C' },
      ],
    },
    {
      id: 'PRD-002',
      name: 'コンパクトキーボード',
      category: 'PCアクセサリ',
      description: 'デスクを広く使える省スペース設計。静かな打鍵音で毎日の作業を快適に。',
      price: 8600,
      stock: 5,
      image: '/images/small/pix1861-keyboard-1628551_640.jpg',
      features: [
        '省スペースで使えるコンパクトなレイアウト。',
        '静かな打鍵音で毎日の作業を快適に。',
        'USB接続ですぐに使い始められます。',
      ],
      specifications: [
        { label: '接続方式', value: 'USB有線' },
        { label: 'キー配列', value: '日本語配列' },
        { label: '対応OS', value: 'Windows / macOS' },
      ],
    },
    {
      id: 'PRD-003',
      name: 'ポータブルスピーカー',
      category: 'オーディオ',
      description: 'お気に入りの音楽をどこでも楽しめる、持ち運びに便利な小型スピーカーです。',
      price: 6400,
      stock: 0,
      image: '/images/small/shan-tang-she-ying-speaker-5902204_640.jpg',
      features: [
        '持ち運びやすいコンパクトなサイズ。',
        'スマートフォンとワイヤレスで接続。',
        '充電式で好きな場所で音楽を楽しめます。',
      ],
      specifications: [
        { label: '接続方式', value: 'Bluetooth' },
        { label: '連続再生時間', value: '最大10時間' },
        { label: '充電端子', value: 'USB Type-C' },
      ],
    },
    {
      id: 'PRD-004',
      name: 'インテリア電球',
      category: 'インテリア',
      description: 'お部屋にあたたかな雰囲気を添える電球。お気に入りの照明と合わせて楽しめます。',
      price: 4900,
      stock: 18,
      image: '/images/small/zee_shutterz-bulb-5665770_640.jpg',
      features: [
        'あたたかみのある光でくつろぎの空間に。',
        'フィラメントのデザインを楽しめるクリアガラス。',
        'リビングやベッドサイドのアクセントに。',
      ],
      specifications: [
        { label: '口金', value: 'E26' },
        { label: '光色', value: '電球色' },
        { label: '定格電圧', value: '100V' },
      ],
    },
    {
      id: 'PRD-005',
      name: 'オードパルファム',
      category: 'フレグランス',
      description: '毎日のお出かけに華やかな香りを。飾っても楽しめるボトル入りのフレグランスです。',
      price: 2800,
      stock: 24,
      image: '/images/small/josch13-perfume-173625_640.jpg',
      features: [
        'お出かけに使いやすい華やかな香り。',
        '少量ずつ使いやすいスプレータイプ。',
        '飾っても楽しめるガラスボトル。',
      ],
      specifications: [
        { label: '種類', value: 'オードパルファム' },
        { label: '香り', value: 'フローラル' },
        { label: '内容量', value: '30mL' },
      ],
    },
    {
      id: 'PRD-006',
      name: 'デイリーバックパック',
      category: 'バッグ',
      description: 'ノートPCと日用品をすっきり収納。軽量で、普段使いしやすいバックパックです。',
      price: 9800,
      stock: 3,
      image: '/images/small/stocksnap-people-2577465_640.jpg',
      features: [
        'ノートPCと小物を分けて収納できるポケット。',
        '軽量で通勤・通学にも使いやすい設計。',
        '肩ひもの長さを調節できます。',
      ],
      specifications: [
        { label: '容量', value: '約20L' },
        { label: '対応PCサイズ', value: '最大15インチ' },
        { label: '素材', value: 'ポリエステル' },
      ],
    },
  ];

  public async getCount(): Promise<number> {
    return new Promise<number>((resolve) => resolve(this._products.length));
  }

  public async getProducts(query: string, inStockOnly: boolean): Promise<Product[]> {
    const filtered = this._products.filter((product) => {
      const matchesQuery = query
        ? [product.name, product.category, product.id, product.description].some((value) =>
            value.toLocaleLowerCase('ja-JP').includes(query),
          )
        : true;

      return matchesQuery && (!inStockOnly || product.stock > 0);
    });

    return new Promise<Product[]>((resolve) => resolve(filtered));
  }

  public async getProduct(id: string): Promise<Product> {
    const found = this._products.find((product) => product.id === id);
    return new Promise((resolve, reject) => {
      if (found) {
        resolve(found);
      } else {
        const error = new HttpErrorResponse({
          error: 'Product not found',
          status: 404,
        });
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        reject(error);
      }
    });
  }
}
