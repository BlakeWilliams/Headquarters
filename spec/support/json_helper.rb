module JsonHelper
  def json
    JSON.parse(@response.body)
  end
end

RSpec.configure do |c|
  c.include JsonHelper
end
