import Blog from '../models/Blog.js'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Article non trouvé' })
    }
    res.json(post)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body
    const post = new Blog({
      title,
      content,
      author
    })
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updatePost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    )
    res.json(post)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id)
    res.json({ message: 'Article supprimé' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
