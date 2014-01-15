require 'spec_helper'

describe GravatarService do
  describe '#url' do
    let(:user) { create(:user) }
    let(:gravatar) { GravatarService.new(user) }
    let(:gravatar_url) { 'http://www.gravatar.com/avatar/' }

    it 'returns a gravatar url' do
      expect(gravatar.url).to match(%r[#{gravatar_url}])
    end

    it 'includes the md5 digest of the user' do
      digest = Digest::MD5.hexdigest(user.email)
      url_digest = gravatar.url.gsub gravatar_url, ''

      expect(url_digest).to eq(digest)
    end
  end
end
