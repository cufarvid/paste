import { ThemeConfig } from './index.ts';

export const latte: ThemeConfig = {
  name: 'latte',
  type: 'light',
  controls: {
    surface: '#ccd0da', // Surface0
    overlay: '#9ca0b0', // Overlay0
    background: '#e6e9ef', // Mantle
    text: '#4c4f69', // Text
    primary: '#7287fd', // Lavender
  },
  editor: {
    base: 'vs',
    inherit: true,
    rules: [
      {
        foreground: '4c4f69',
        token: 'text',
      },
      {
        foreground: '4c4f69',
        token: 'source',
      },
      {
        foreground: '4c4f69',
        token: 'variable.other.readwrite',
      },
      {
        foreground: '4c4f69',
        token: 'punctuation.definition.variable',
      },
      {
        foreground: '7c7f93',
        token: 'punctuation',
      },
      {
        foreground: '9ca0b0',
        fontStyle: 'italic',
        token: 'comment',
      },
      {
        foreground: '9ca0b0',
        fontStyle: 'italic',
        token: 'punctuation.definition.comment',
      },
      {
        foreground: '40a02b',
        token: 'string',
      },
      {
        foreground: '40a02b',
        token: 'punctuation.definition.string',
      },
      {
        foreground: 'ea76cb',
        token: 'constant.character.escape',
      },
      {
        foreground: 'fe640b',
        token: 'constant.numeric',
      },
      {
        foreground: 'fe640b',
        token: 'variable.other.constant',
      },
      {
        foreground: 'fe640b',
        token: 'entity.name.constant',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.boolean',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.false',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.true',
      },
      {
        foreground: 'fe640b',
        token: 'keyword.other.unit.user-defined',
      },
      {
        foreground: 'fe640b',
        token: 'keyword.other.unit.suffix.floating-point',
      },
      {
        foreground: '8839ef',
        token: 'keyword',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.word',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.new',
      },
      {
        foreground: '8839ef',
        token: 'variable.language.super',
      },
      {
        foreground: '8839ef',
        token: 'support.type.primitive',
      },
      {
        foreground: '8839ef',
        token: 'storage.type',
      },
      {
        foreground: '8839ef',
        token: 'storage.modifier',
      },
      {
        foreground: '8839ef',
        token: 'punctuation.definition.keyword',
      },
      {
        foreground: '8839ef',
        token: 'entity.name.tag.documentation',
      },
      {
        foreground: '179299',
        token: 'keyword.operator',
      },
      {
        foreground: '179299',
        token: 'punctuation.accessor',
      },
      {
        foreground: '179299',
        token: 'punctuation.definition.generic',
      },
      {
        foreground: '179299',
        token: 'meta.function.closure punctuation.section.parameters',
      },
      {
        foreground: '179299',
        token: 'punctuation.definition.tag',
      },
      {
        foreground: '179299',
        token: 'punctuation.separator.key-value',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'entity.name.function',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'meta.function-call.method',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'support.function',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'support.function.misc',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'variable.function',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.name.class',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.other.inherited-class',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'support.class',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'meta.function-call.constructor',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.name.struct',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.name.enum',
      },
      {
        foreground: '179299',
        token: 'meta.enum variable.other.readwrite',
      },
      {
        foreground: '179299',
        token: 'variable.other.enummember',
      },
      {
        foreground: '179299',
        token: 'meta.property.object',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'meta.type',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'meta.type-alias',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'support.type',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.name.type',
      },
      {
        foreground: 'fe640b',
        token: 'meta.annotation variable.function',
      },
      {
        foreground: 'fe640b',
        token: 'meta.annotation variable.annotation.function',
      },
      {
        foreground: 'fe640b',
        token: 'meta.annotation punctuation.definition.annotation',
      },
      {
        foreground: 'fe640b',
        token: 'meta.decorator',
      },
      {
        foreground: 'fe640b',
        token: 'punctuation.decorator',
      },
      {
        foreground: 'e64553',
        fontStyle: 'italic',
        token: 'variable.parameter',
      },
      {
        foreground: 'e64553',
        fontStyle: 'italic',
        token: 'meta.function.parameters',
      },
      {
        foreground: 'd20f39',
        token: 'constant.language',
      },
      {
        foreground: 'd20f39',
        token: 'support.function.builtin',
      },
      {
        foreground: 'd20f39',
        token: 'entity.other.attribute-name.documentation',
      },
      {
        foreground: 'df8e1d',
        token: 'keyword.control.directive',
      },
      {
        foreground: 'df8e1d',
        token: 'punctuation.definition.directive',
      },
      {
        foreground: '04a5e5',
        token: 'punctuation.definition.typeparameters',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.namespace',
      },
      {
        foreground: '1e66f5',
        token: 'support.type.property-name.css',
      },
      {
        foreground: 'd20f39',
        token: 'variable.language.this',
      },
      {
        foreground: 'd20f39',
        token: 'variable.language.this punctuation.definition.variable',
      },
      {
        foreground: '4c4f69',
        token: 'variable.object.property',
      },
      {
        foreground: '4c4f69',
        token: 'string.template variable',
      },
      {
        foreground: '4c4f69',
        token: 'string variable',
      },
      {
        fontStyle: 'bold',
        token: 'keyword.operator.new',
      },
      {
        foreground: '8839ef',
        token: 'storage.modifier.specifier.extern.cpp',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.scope-resolution.template.call.cpp',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.scope-resolution.parameter.cpp',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.scope-resolution.cpp',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.scope-resolution.function.definition.cpp',
      },
      {
        foreground: '179299',
        token: 'storage.modifier.reference.cpp',
      },
      {
        foreground: '4c4f69',
        token: 'meta.interpolation.cs',
      },
      {
        foreground: '4c4f69',
        token: 'comment.block.documentation.cs',
      },
      {
        foreground: 'df8e1d',
        token: 'source.css entity.other.attribute-name.class.css',
      },
      {
        foreground: 'df8e1d',
        token:
          'entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css',
      },
      {
        foreground: '179299',
        token: 'punctuation.separator.operator.css',
      },
      {
        foreground: '179299',
        token: 'source.css entity.other.attribute-name.pseudo-class',
      },
      {
        foreground: 'fe640b',
        token: 'source.css constant.other.unicode-range',
      },
      {
        foreground: '40a02b',
        token: 'source.css variable.parameter.url',
      },
      {
        foreground: '04a5e5',
        token: 'support.type.vendored.property-name',
      },
      {
        foreground: 'e64553',
        token: 'source.css meta.property-value variable',
      },
      {
        foreground: 'e64553',
        token: 'source.css meta.property-value variable.other.less',
      },
      {
        foreground: 'e64553',
        token:
          'source.css meta.property-value variable.other.less punctuation.definition.variable.less',
      },
      {
        foreground: 'e64553',
        token: 'meta.definition.variable.scss',
      },
      {
        foreground: '1e66f5',
        token: 'source.css meta.property-list variable',
      },
      {
        foreground: '1e66f5',
        token: 'meta.property-list variable.other.less',
      },
      {
        foreground: '1e66f5',
        token:
          'meta.property-list variable.other.less punctuation.definition.variable.less',
      },
      {
        foreground: 'fe640b',
        token: 'keyword.other.unit.percentage.css',
      },
      {
        foreground: '40a02b',
        token: 'source.css meta.attribute-selector',
      },
      {
        foreground: '1e66f5',
        token: 'keyword.other.definition.ini',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.support.type.property-name.json',
      },
      {
        foreground: '1e66f5',
        token: 'support.type.property-name.json',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.support.type.property-name.toml',
      },
      {
        foreground: '1e66f5',
        token: 'support.type.property-name.toml',
      },
      {
        foreground: '1e66f5',
        token: 'entity.name.tag.yaml',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.support.type.property-name.yaml',
      },
      {
        foreground: '1e66f5',
        token: 'support.type.property-name.yaml',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.json',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.yaml',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.type.anchor.yaml',
      },
      {
        foreground: 'df8e1d',
        token: 'variable.other.alias.yaml',
      },
      {
        foreground: 'df8e1d',
        token: 'support.type.property-name.table',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.section.group-title.ini',
      },
      {
        foreground: 'ea76cb',
        token: 'constant.other.time.datetime.offset.toml',
      },
      {
        foreground: 'ea76cb',
        token: 'punctuation.definition.anchor.yaml',
      },
      {
        foreground: 'ea76cb',
        token: 'punctuation.definition.alias.yaml',
      },
      {
        foreground: 'ea76cb',
        token: 'entity.other.document.begin.yaml',
      },
      {
        foreground: 'fe640b',
        token: 'markup.changed.diff',
      },
      {
        foreground: '1e66f5',
        token: 'meta.diff.header.from-file',
      },
      {
        foreground: '1e66f5',
        token: 'meta.diff.header.to-file',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.definition.from-file.diff',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.definition.to-file.diff',
      },
      {
        foreground: '40a02b',
        token: 'markup.inserted.diff',
      },
      {
        foreground: 'd20f39',
        token: 'markup.deleted.diff',
      },
      {
        foreground: '1e66f5',
        token: 'variable.other.env',
      },
      {
        foreground: '4c4f69',
        token: 'string.quoted variable.other.env',
      },
      {
        foreground: '1e66f5',
        token: 'support.function.builtin.gdscript',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.gdscript',
      },
      {
        foreground: 'e64553',
        token: 'comment meta.annotation.go',
      },
      {
        foreground: 'fe640b',
        token: 'comment meta.annotation.parameters.go',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.go',
      },
      {
        foreground: '4c4f69',
        token: 'variable.graphql',
      },
      {
        foreground: 'dd7878',
        token: 'string.unquoted.alias.graphql',
      },
      {
        foreground: '179299',
        token: 'constant.character.enum.graphql',
      },
      {
        foreground: 'dd7878',
        token:
          'meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql',
      },
      {
        foreground: '8839ef',
        token: 'keyword.other.doctype',
      },
      {
        foreground: '8839ef',
        token: 'meta.tag.sgml.doctype punctuation.definition.tag',
      },
      {
        foreground: '8839ef',
        token: 'meta.tag.metadata.doctype entity.name.tag',
      },
      {
        foreground: '8839ef',
        token: 'meta.tag.metadata.doctype punctuation.definition.tag',
      },
      {
        foreground: '1e66f5',
        token: 'entity.name.tag',
      },
      {
        foreground: 'd20f39',
        token: 'text.html constant.character.entity',
      },
      {
        foreground: 'd20f39',
        token: 'text.html constant.character.entity punctuation',
      },
      {
        foreground: 'd20f39',
        token: 'constant.character.entity.xml',
      },
      {
        foreground: 'd20f39',
        token: 'constant.character.entity.xml punctuation',
      },
      {
        foreground: 'd20f39',
        token: 'constant.character.entity.js.jsx',
      },
      {
        foreground: 'd20f39',
        token: 'constant.charactger.entity.js.jsx punctuation',
      },
      {
        foreground: 'd20f39',
        token: 'constant.character.entity.tsx',
      },
      {
        foreground: 'd20f39',
        token: 'constant.character.entity.tsx punctuation',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: 'ea76cb',
        token: 'support.class.component',
      },
      {
        foreground: 'ea76cb',
        token: 'support.class.component.jsx',
      },
      {
        foreground: 'ea76cb',
        token: 'support.class.component.tsx',
      },
      {
        foreground: 'ea76cb',
        token: 'support.class.component.vue',
      },
      {
        foreground: 'fe640b',
        token: 'punctuation.definition.annotation',
      },
      {
        foreground: 'fe640b',
        token: 'storage.type.annotation',
      },
      {
        foreground: '179299',
        token: 'constant.other.enum.java',
      },
      {
        foreground: '4c4f69',
        token: 'storage.modifier.import.java',
      },
      {
        foreground: 'e64553',
        token: 'meta.export variable.other.readwrite.js',
      },
      {
        foreground: '4c4f69',
        token: 'variable.other.constant.js',
      },
      {
        foreground: '4c4f69',
        token: 'variable.other.constant.ts',
      },
      {
        foreground: '4c4f69',
        token: 'variable.other.property.js',
      },
      {
        foreground: '4c4f69',
        token: 'variable.other.property.ts',
      },
      {
        foreground: 'e64553',
        token: 'variable.other.jsdoc',
      },
      {
        foreground: 'e64553',
        token: 'comment.block.documentation variable.other',
      },
      {
        foreground: '4c4f69',
        token: 'support.type.object.console.js',
      },
      {
        foreground: '8839ef',
        token: 'support.constant.node',
      },
      {
        foreground: '8839ef',
        token: 'support.type.object.module.js',
      },
      {
        foreground: '8839ef',
        token: 'storage.modifier.implements',
      },
      {
        foreground: '8839ef',
        token: 'constant.language.null.js',
      },
      {
        foreground: '8839ef',
        token: 'constant.language.null.ts',
      },
      {
        foreground: '8839ef',
        token: 'constant.language.undefined.js',
      },
      {
        foreground: '8839ef',
        token: 'constant.language.undefined.ts',
      },
      {
        foreground: '8839ef',
        token: 'support.type.builtin.ts',
      },
      {
        foreground: 'df8e1d',
        token: 'variable.parameter.generic',
      },
      {
        foreground: '179299',
        token: 'keyword.declaration.function.arrow.js',
      },
      {
        foreground: '179299',
        token: 'storage.type.function.arrow.ts',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'punctuation.decorator.ts',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.in.js',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.in.ts',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.infer.ts',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.instanceof.js',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.instanceof.ts',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.is',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.keyof.ts',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.of.js',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.of.ts',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.expression.typeof.ts',
      },
      {
        foreground: '179299',
        fontStyle: 'italic',
        token: 'support.function.macro.julia',
      },
      {
        foreground: 'fe640b',
        token: 'constant.language.julia',
      },
      {
        foreground: 'e64553',
        token: 'constant.other.symbol.julia',
      },
      {
        foreground: '179299',
        token: 'text.tex keyword.control.preamble',
      },
      {
        foreground: '04a5e5',
        token: 'text.tex support.function.be',
      },
      {
        foreground: 'dd7878',
        token: 'constant.other.general.math.tex',
      },
      {
        foreground: '8839ef',
        token:
          'comment.line.double-dash.documentation.lua storage.type.annotation.lua',
      },
      {
        foreground: '4c4f69',
        token:
          'comment.line.double-dash.documentation.lua entity.name.variable.lua',
      },
      {
        foreground: '4c4f69',
        token: 'comment.line.double-dash.documentation.lua variable.lua',
      },
      {
        foreground: 'd20f39',
        token: 'heading.1.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'd20f39',
        token: 'heading.1.markdown',
      },
      {
        foreground: 'd20f39',
        token: 'markup.heading.atx.1.mdx',
      },
      {
        foreground: 'd20f39',
        token: 'markup.heading.atx.1.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'd20f39',
        token: 'markup.heading.setext.1.markdown',
      },
      {
        foreground: 'd20f39',
        token: 'markup.heading.heading-0.asciidoc',
      },
      {
        foreground: 'fe640b',
        token: 'heading.2.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'fe640b',
        token: 'heading.2.markdown',
      },
      {
        foreground: 'fe640b',
        token: 'markup.heading.atx.2.mdx',
      },
      {
        foreground: 'fe640b',
        token: 'markup.heading.atx.2.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'fe640b',
        token: 'markup.heading.setext.2.markdown',
      },
      {
        foreground: 'fe640b',
        token: 'markup.heading.heading-1.asciidoc',
      },
      {
        foreground: 'df8e1d',
        token: 'heading.3.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'df8e1d',
        token: 'heading.3.markdown',
      },
      {
        foreground: 'df8e1d',
        token: 'markup.heading.atx.3.mdx',
      },
      {
        foreground: 'df8e1d',
        token: 'markup.heading.atx.3.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'df8e1d',
        token: 'markup.heading.heading-2.asciidoc',
      },
      {
        foreground: '40a02b',
        token: 'heading.4.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: '40a02b',
        token: 'heading.4.markdown',
      },
      {
        foreground: '40a02b',
        token: 'markup.heading.atx.4.mdx',
      },
      {
        foreground: '40a02b',
        token: 'markup.heading.atx.4.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: '40a02b',
        token: 'markup.heading.heading-3.asciidoc',
      },
      {
        foreground: '1e66f5',
        token: 'heading.5.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: '1e66f5',
        token: 'heading.5.markdown',
      },
      {
        foreground: '1e66f5',
        token: 'markup.heading.atx.5.mdx',
      },
      {
        foreground: '1e66f5',
        token: 'markup.heading.atx.5.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: '1e66f5',
        token: 'markup.heading.heading-4.asciidoc',
      },
      {
        foreground: '8839ef',
        token: 'heading.6.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: '8839ef',
        token: 'heading.6.markdown',
      },
      {
        foreground: '8839ef',
        token: 'markup.heading.atx.6.mdx',
      },
      {
        foreground: '8839ef',
        token: 'markup.heading.atx.6.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: '8839ef',
        token: 'markup.heading.heading-5.asciidoc',
      },
      {
        foreground: 'd20f39',
        fontStyle: 'bold',
        token: 'markup.bold',
      },
      {
        foreground: 'd20f39',
        fontStyle: 'italic',
        token: 'markup.italic',
      },
      {
        foreground: '6c6f85',
        fontStyle: 'strikethrough',
        token: 'markup.strikethrough',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.definition.link',
      },
      {
        foreground: '1e66f5',
        token: 'markup.underline.link',
      },
      {
        foreground: '7287fd',
        token: 'text.html.markdown punctuation.definition.link.title',
      },
      {
        foreground: '7287fd',
        token: 'string.other.link.title.markdown',
      },
      {
        foreground: '7287fd',
        token: 'markup.link',
      },
      {
        foreground: '7287fd',
        token: 'punctuation.definition.constant.markdown',
      },
      {
        foreground: '7287fd',
        token: 'constant.other.reference.link.markdown',
      },
      {
        foreground: '7287fd',
        token: 'markup.substitution.attribute-reference',
      },
      {
        foreground: '40a02b',
        token: 'punctuation.definition.raw.markdown',
      },
      {
        foreground: '40a02b',
        token: 'markup.inline.raw.string.markdown',
      },
      {
        foreground: '40a02b',
        token: 'markup.raw.block.markdown',
      },
      {
        foreground: '04a5e5',
        token: 'fenced_code.block.language',
      },
      {
        foreground: '7c7f93',
        token: 'markup.fenced_code.block punctuation.definition',
      },
      {
        foreground: '7c7f93',
        token: 'markup.raw support.asciidoc',
      },
      {
        foreground: 'ea76cb',
        token: 'markup.quote',
      },
      {
        foreground: 'ea76cb',
        token: 'punctuation.definition.quote.begin',
      },
      {
        foreground: '179299',
        token: 'meta.separator.markdown',
      },
      {
        foreground: '179299',
        token: 'punctuation.definition.list.begin.markdown',
      },
      {
        foreground: '179299',
        token: 'markup.list.bullet',
      },
      {
        foreground: '1e66f5',
        token: 'entity.other.attribute-name.multipart.nix',
      },
      {
        foreground: '1e66f5',
        token: 'entity.other.attribute-name.single.nix',
      },
      {
        foreground: '4c4f69',
        token: 'variable.parameter.name.nix',
      },
      {
        foreground: '7287fd',
        token: 'meta.embedded variable.parameter.name.nix',
      },
      {
        foreground: 'ea76cb',
        token: 'string.unquoted.path.nix',
      },
      {
        foreground: 'df8e1d',
        token: 'support.attribute.builtin',
      },
      {
        foreground: 'df8e1d',
        token: 'meta.attribute.php',
      },
      {
        foreground: 'e64553',
        token:
          'meta.function.parameters.php punctuation.definition.variable.php',
      },
      {
        foreground: '8839ef',
        token: 'constant.language.php',
      },
      {
        foreground: '04a5e5',
        token: 'text.html.php support.function',
      },
      {
        foreground: '4c4f69',
        token: 'support.variable.magic.python',
      },
      {
        foreground: '4c4f69',
        token: 'meta.function-call.arguments.python',
      },
      {
        foreground: '04a5e5',
        fontStyle: 'italic',
        token: 'support.function.magic.python',
      },
      {
        foreground: 'd20f39',
        fontStyle: 'italic',
        token: 'variable.parameter.function.language.special.self.python',
      },
      {
        foreground: 'd20f39',
        fontStyle: 'italic',
        token: 'variable.language.special.self.python',
      },
      {
        foreground: '8839ef',
        token: 'keyword.control.flow.python',
      },
      {
        foreground: '8839ef',
        token: 'keyword.operator.logical.python',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.function.python',
      },
      {
        foreground: '04a5e5',
        token: 'support.token.decorator.python',
      },
      {
        foreground: '04a5e5',
        token: 'meta.function.decorator.identifier.python',
      },
      {
        foreground: '1e66f5',
        token: 'meta.function-call.python',
      },
      {
        foreground: 'fe640b',
        fontStyle: 'italic',
        token: 'entity.name.function.decorator.python',
      },
      {
        foreground: 'fe640b',
        fontStyle: 'italic',
        token: 'punctuation.definition.decorator.python',
      },
      {
        foreground: 'ea76cb',
        token: 'constant.character.format.placeholder.other.python',
      },
      {
        foreground: 'fe640b',
        token: 'support.type.exception.python',
      },
      {
        foreground: 'fe640b',
        token: 'support.function.builtin.python',
      },
      {
        foreground: 'fe640b',
        token: 'support.type.python',
      },
      {
        foreground: '8839ef',
        token: 'constant.language.python',
      },
      {
        foreground: 'e64553',
        fontStyle: 'italic',
        token: 'meta.indexed-name.python',
      },
      {
        foreground: 'e64553',
        fontStyle: 'italic',
        token: 'meta.item-access.python',
      },
      {
        foreground: '40a02b',
        fontStyle: 'italic',
        token: 'storage.type.string.python',
      },
      {
        foreground: 'ea76cb',
        token: 'string.regexp punctuation.definition.string.begin',
      },
      {
        foreground: 'ea76cb',
        token: 'string.regexp punctuation.definition.string.end',
      },
      {
        foreground: '8839ef',
        token: 'keyword.control.anchor.regexp',
      },
      {
        foreground: '4c4f69',
        token: 'string.regexp.ts',
      },
      {
        foreground: '40a02b',
        token: 'punctuation.definition.group.regexp',
      },
      {
        foreground: '40a02b',
        token: 'keyword.other.back-reference.regexp',
      },
      {
        foreground: 'df8e1d',
        token: 'punctuation.definition.character-class.regexp',
      },
      {
        foreground: 'ea76cb',
        token: 'constant.other.character-class.regexp',
      },
      {
        foreground: 'dc8a78',
        token: 'constant.other.character-class.range.regexp',
      },
      {
        foreground: '179299',
        token: 'keyword.operator.quantifier.regexp',
      },
      {
        foreground: 'fe640b',
        token: 'constant.character.numeric.regexp',
      },
      {
        foreground: '1e66f5',
        token: 'punctuation.definition.group.no-capture.regexp',
      },
      {
        foreground: '1e66f5',
        token: 'meta.assertion.look-ahead.regexp',
      },
      {
        foreground: '1e66f5',
        token: 'meta.assertion.negative-look-ahead.regexp',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'meta.annotation.rust',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'meta.annotation.rust punctuation',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'meta.attribute.rust',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'punctuation.definition.attribute.rust',
      },
      {
        foreground: '8839ef',
        token: 'entity.name.function.macro.rules.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.module.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.modifier.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.struct.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.enum.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.trait.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.union.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.impl.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.function.rust',
      },
      {
        foreground: '8839ef',
        token: 'storage.type.type.rust',
      },
      {
        foreground: '8839ef',
        token: 'entity.name.type.numeric.rust',
      },
      {
        foreground: 'fe640b',
        token: 'meta.generic.rust',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.name.impl.rust',
      },
      {
        foreground: 'fe640b',
        token: 'entity.name.module.rust',
      },
      {
        foreground: 'df8e1d',
        fontStyle: 'italic',
        token: 'entity.name.trait.rust',
      },
      {
        foreground: 'df8e1d',
        token: 'storage.type.source.rust',
      },
      {
        foreground: 'df8e1d',
        token: 'entity.name.union.rust',
      },
      {
        foreground: '179299',
        token: 'meta.enum.rust storage.type.source.rust',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'support.macro.rust',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'meta.macro.rust support.function.rust',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'entity.name.function.macro.rust',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'storage.modifier.lifetime.rust',
      },
      {
        foreground: '1e66f5',
        fontStyle: 'italic',
        token: 'entity.name.type.lifetime',
      },
      {
        foreground: 'ea76cb',
        token: 'string.quoted.double.rust constant.other.placeholder.rust',
      },
      {
        foreground: '4c4f69',
        token:
          'meta.function.return-type.rust meta.generic.rust storage.type.rust',
      },
      {
        foreground: '1e66f5',
        token: 'meta.function.call.rust',
      },
      {
        foreground: '04a5e5',
        token: 'punctuation.brackets.angle.rust',
      },
      {
        foreground: 'fe640b',
        token: 'constant.other.caps.rust',
      },
      {
        foreground: 'e64553',
        token: 'meta.function.definition.rust variable.other.rust',
      },
      {
        foreground: '4c4f69',
        token: 'meta.function.call.rust variable.other.rust',
      },
      {
        foreground: 'd20f39',
        token: 'variable.language.self.rust',
      },
      {
        foreground: 'ea76cb',
        token: 'variable.other.metavariable.name.rust',
      },
      {
        foreground: 'ea76cb',
        token:
          'meta.macro.metavariable.rust keyword.operator.macro.dollar.rust',
      },
      {
        foreground: 'ea76cb',
        fontStyle: 'italic',
        token: 'comment.line.shebang',
      },
      {
        foreground: 'ea76cb',
        fontStyle: 'italic',
        token: 'comment.line.shebang punctuation.definition.comment',
      },
      {
        foreground: 'ea76cb',
        fontStyle: 'italic',
        token: 'comment.line.shebang',
      },
      {
        foreground: 'ea76cb',
        fontStyle: 'italic',
        token: 'punctuation.definition.comment.shebang.shell',
      },
      {
        foreground: 'ea76cb',
        fontStyle: 'italic',
        token: 'meta.shebang.shell',
      },
      {
        foreground: '179299',
        fontStyle: 'italic',
        token: 'comment.line.shebang constant.language',
      },
      {
        foreground: 'd20f39',
        token:
          'meta.function-call.arguments.shell punctuation.definition.variable.shell',
      },
      {
        foreground: 'd20f39',
        token:
          'meta.function-call.arguments.shell punctuation.section.interpolation',
      },
      {
        foreground: 'd20f39',
        token:
          'meta.function-call.arguments.shell punctuation.definition.variable.shell',
      },
      {
        foreground: 'd20f39',
        token:
          'meta.function-call.arguments.shell punctuation.section.interpolation',
      },
      {
        foreground: 'fe640b',
        fontStyle: 'italic',
        token:
          'meta.string meta.interpolation.parameter.shell variable.other.readwrite',
      },
      {
        foreground: '179299',
        token: 'source.shell punctuation.section.interpolation',
      },
      {
        foreground: '179299',
        token: 'punctuation.definition.evaluation.backticks.shell',
      },
      {
        foreground: '8839ef',
        token: 'entity.name.tag.heredoc.shell',
      },
      {
        foreground: '4c4f69',
        token: 'string.quoted.double.shell variable.other.normal.shell',
      },
    ],
    colors: {
      'editor.foreground': '#4c4f69',
      'editor.background': '#eff1f5',
      'editor.selectionBackground': '#acb0be66',
      'editor.lineHighlightBackground': '#4c4f6912',
      'editorCursor.foreground': '#dc8a78',
      'editorIndentGuide.activeBackground': '#bcc0cc',
    },
  },
};
