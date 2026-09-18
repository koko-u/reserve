import { Service } from '@angular/core';
import { Product } from './product-model';

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
    },
    {
      id: 'PRD-002',
      name: 'コンパクトキーボード',
      category: 'PCアクセサリ',
      description: 'デスクを広く使える省スペース設計。静かな打鍵音で毎日の作業を快適に。',
      price: 8600,
      stock: 5,
      image: '/images/small/pix1861-keyboard-1628551_640.jpg',
    },
    {
      id: 'PRD-003',
      name: 'ポータブルスピーカー',
      category: 'オーディオ',
      description: 'お気に入りの音楽をどこでも楽しめる、持ち運びに便利な小型スピーカーです。',
      price: 6400,
      stock: 0,
      image: '/images/small/shan-tang-she-ying-speaker-5902204_640.jpg',
    },
    {
      id: 'PRD-004',
      name: 'インテリア電球',
      category: 'インテリア',
      description: 'お部屋にあたたかな雰囲気を添える電球。お気に入りの照明と合わせて楽しめます。',
      price: 4900,
      stock: 18,
      image: '/images/small/zee_shutterz-bulb-5665770_640.jpg',
    },
    {
      id: 'PRD-005',
      name: 'オードパルファム',
      category: 'フレグランス',
      description: '毎日のお出かけに華やかな香りを。飾っても楽しめるボトル入りのフレグランスです。',
      price: 2800,
      stock: 24,
      image: '/images/small/josch13-perfume-173625_640.jpg',
    },
    {
      id: 'PRD-006',
      name: 'デイリーバックパック',
      category: 'バッグ',
      description: 'ノートPCと日用品をすっきり収納。軽量で、普段使いしやすいバックパックです。',
      price: 9800,
      stock: 3,
      image: '/images/small/stocksnap-people-2577465_640.jpg',
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
}
