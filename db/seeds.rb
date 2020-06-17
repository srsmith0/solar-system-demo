Product.destroy_all
100.times do
  Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department,
  )
end

puts "100 Products Seeded"




SolarSystem.destroy_all
Planet.destroy_all

10.times do |i|
  s = SolarSystem.create(name: Faker::TvShows::RickAndMorty.location)
  5.times do |p|
    s.planets.create(name: Faker::Games::WorldOfWarcraft.hero, inhabited: false, size: rand(200...2000))
  end
end


puts "seeded brah. size is #{Planet.all.size} plaents. #{SolarSystem.all.size} solar systems"