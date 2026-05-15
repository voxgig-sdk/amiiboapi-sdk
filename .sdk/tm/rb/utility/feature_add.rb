# Amiiboapi SDK utility: feature_add
module AmiiboapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
