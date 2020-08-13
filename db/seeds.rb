hobby = Category.create(name: "趣味", ancestry: nil)
impression = Category.create(name: "感想", ancestry: nil)
daily_work = Category.create(name: "日課", ancestry: nil)

## 趣味
cooking = hobby.children.create(name: "料理")
cooking.children.create(name:"ディナー")
cooking.children.create(name:"ランチ")
cooking.children.create(name:"スイーツ")

pet = hobby.children.create(name: "ペット")
pet.children.create(name:"うさぎ")
pet.children.create(name:"ハムスター")
pet.children.create(name:"モルモット")

travel = hobby.children.create(name: "旅行")
travel.children.create(name:"海外")
travel.children.create(name:"国内")

## 感想
book = impression.children.create(name: "本")
book.children.create(name: "小説")
book.children.create(name: "漫画")
book.children.create(name: "技術書")

electronics = impression.children.create(name: "家電")
electronics.children.create(name: "キッチン")
electronics.children.create(name: "IT")
electronics.children.create(name: "オーディオ")

foods = impression.children.create(name: "食べ物")
foods.children.create(name: "インスタント食品")
foods.children.create(name: "お菓子")
foods.children.create(name: "外食")

## 日課
study = daily_work.children.create(name: "勉強")
study.children.create(name: "プログラミング")
study.children.create(name: "英語")
study.children.create(name: "資格")

sport = daily_work.children.create(name: "運動")
sport.children.create(name: "ランニング")
sport.children.create(name: "筋トレ")
sport.children.create(name: "ストレッチ")
