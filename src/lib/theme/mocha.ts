import { ThemeConfig } from './index.ts';

export const mocha: ThemeConfig = {
  name: 'mocha',
  type: 'dark',
  controls: {
    surface: '#313244', // Surface0
    overlay: '#6c7086', // Overlay0
    background: '#181825', // Mantle
    text: '#cdd6f4', // Text
    primary: '#b4befe', // Lavender
  },
  editor: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {
        foreground: 'cdd6f4',
        token: 'text',
      },
      {
        foreground: 'cdd6f4',
        token: 'source',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.other.readwrite',
      },
      {
        foreground: 'cdd6f4',
        token: 'punctuation.definition.variable',
      },
      {
        foreground: '9399b2',
        token: 'punctuation',
      },
      {
        foreground: '6c7086',
        fontStyle: 'italic',
        token: 'comment',
      },
      {
        foreground: '6c7086',
        fontStyle: 'italic',
        token: 'punctuation.definition.comment',
      },
      {
        foreground: 'a6e3a1',
        token: 'string',
      },
      {
        foreground: 'a6e3a1',
        token: 'punctuation.definition.string',
      },
      {
        foreground: 'f5c2e7',
        token: 'constant.character.escape',
      },
      {
        foreground: 'fab387',
        token: 'constant.numeric',
      },
      {
        foreground: 'fab387',
        token: 'variable.other.constant',
      },
      {
        foreground: 'fab387',
        token: 'entity.name.constant',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.boolean',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.false',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.true',
      },
      {
        foreground: 'fab387',
        token: 'keyword.other.unit.user-defined',
      },
      {
        foreground: 'fab387',
        token: 'keyword.other.unit.suffix.floating-point',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.word',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.new',
      },
      {
        foreground: 'cba6f7',
        token: 'variable.language.super',
      },
      {
        foreground: 'cba6f7',
        token: 'support.type.primitive',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.modifier',
      },
      {
        foreground: 'cba6f7',
        token: 'punctuation.definition.keyword',
      },
      {
        foreground: 'cba6f7',
        token: 'entity.name.tag.documentation',
      },
      {
        foreground: '94e2d5',
        token: 'keyword.operator',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.accessor',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.definition.generic',
      },
      {
        foreground: '94e2d5',
        token: 'meta.function.closure punctuation.section.parameters',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.definition.tag',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.separator.key-value',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'entity.name.function',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'meta.function-call.method',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'support.function',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'support.function.misc',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'variable.function',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.name.class',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.other.inherited-class',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'support.class',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'meta.function-call.constructor',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.name.struct',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.name.enum',
      },
      {
        foreground: '94e2d5',
        token: 'meta.enum variable.other.readwrite',
      },
      {
        foreground: '94e2d5',
        token: 'variable.other.enummember',
      },
      {
        foreground: '94e2d5',
        token: 'meta.property.object',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'meta.type',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'meta.type-alias',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'support.type',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.name.type',
      },
      {
        foreground: 'fab387',
        token: 'meta.annotation variable.function',
      },
      {
        foreground: 'fab387',
        token: 'meta.annotation variable.annotation.function',
      },
      {
        foreground: 'fab387',
        token: 'meta.annotation punctuation.definition.annotation',
      },
      {
        foreground: 'fab387',
        token: 'meta.decorator',
      },
      {
        foreground: 'fab387',
        token: 'punctuation.decorator',
      },
      {
        foreground: 'eba0ac',
        fontStyle: 'italic',
        token: 'variable.parameter',
      },
      {
        foreground: 'eba0ac',
        fontStyle: 'italic',
        token: 'meta.function.parameters',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.language',
      },
      {
        foreground: 'f38ba8',
        token: 'support.function.builtin',
      },
      {
        foreground: 'f38ba8',
        token: 'entity.other.attribute-name.documentation',
      },
      {
        foreground: 'f9e2af',
        token: 'keyword.control.directive',
      },
      {
        foreground: 'f9e2af',
        token: 'punctuation.definition.directive',
      },
      {
        foreground: '89dceb',
        token: 'punctuation.definition.typeparameters',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.namespace',
      },
      {
        foreground: '89b4fa',
        token: 'support.type.property-name.css',
      },
      {
        foreground: 'f38ba8',
        token: 'variable.language.this',
      },
      {
        foreground: 'f38ba8',
        token: 'variable.language.this punctuation.definition.variable',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.object.property',
      },
      {
        foreground: 'cdd6f4',
        token: 'string.template variable',
      },
      {
        foreground: 'cdd6f4',
        token: 'string variable',
      },
      {
        fontStyle: 'bold',
        token: 'keyword.operator.new',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.modifier.specifier.extern.cpp',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.scope-resolution.template.call.cpp',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.scope-resolution.parameter.cpp',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.scope-resolution.cpp',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.scope-resolution.function.definition.cpp',
      },
      {
        foreground: '94e2d5',
        token: 'storage.modifier.reference.cpp',
      },
      {
        foreground: 'cdd6f4',
        token: 'meta.interpolation.cs',
      },
      {
        foreground: 'cdd6f4',
        token: 'comment.block.documentation.cs',
      },
      {
        foreground: 'f9e2af',
        token: 'source.css entity.other.attribute-name.class.css',
      },
      {
        foreground: 'f9e2af',
        token:
          'entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.separator.operator.css',
      },
      {
        foreground: '94e2d5',
        token: 'source.css entity.other.attribute-name.pseudo-class',
      },
      {
        foreground: 'fab387',
        token: 'source.css constant.other.unicode-range',
      },
      {
        foreground: 'a6e3a1',
        token: 'source.css variable.parameter.url',
      },
      {
        foreground: '89dceb',
        token: 'support.type.vendored.property-name',
      },
      {
        foreground: 'eba0ac',
        token: 'source.css meta.property-value variable',
      },
      {
        foreground: 'eba0ac',
        token: 'source.css meta.property-value variable.other.less',
      },
      {
        foreground: 'eba0ac',
        token:
          'source.css meta.property-value variable.other.less punctuation.definition.variable.less',
      },
      {
        foreground: 'eba0ac',
        token: 'meta.definition.variable.scss',
      },
      {
        foreground: '89b4fa',
        token: 'source.css meta.property-list variable',
      },
      {
        foreground: '89b4fa',
        token: 'meta.property-list variable.other.less',
      },
      {
        foreground: '89b4fa',
        token:
          'meta.property-list variable.other.less punctuation.definition.variable.less',
      },
      {
        foreground: 'fab387',
        token: 'keyword.other.unit.percentage.css',
      },
      {
        foreground: 'a6e3a1',
        token: 'source.css meta.attribute-selector',
      },
      {
        foreground: '89b4fa',
        token: 'keyword.other.definition.ini',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.support.type.property-name.json',
      },
      {
        foreground: '89b4fa',
        token: 'support.type.property-name.json',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.support.type.property-name.toml',
      },
      {
        foreground: '89b4fa',
        token: 'support.type.property-name.toml',
      },
      {
        foreground: '89b4fa',
        token: 'entity.name.tag.yaml',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.support.type.property-name.yaml',
      },
      {
        foreground: '89b4fa',
        token: 'support.type.property-name.yaml',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.json',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.yaml',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.type.anchor.yaml',
      },
      {
        foreground: 'f9e2af',
        token: 'variable.other.alias.yaml',
      },
      {
        foreground: 'f9e2af',
        token: 'support.type.property-name.table',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.section.group-title.ini',
      },
      {
        foreground: 'f5c2e7',
        token: 'constant.other.time.datetime.offset.toml',
      },
      {
        foreground: 'f5c2e7',
        token: 'punctuation.definition.anchor.yaml',
      },
      {
        foreground: 'f5c2e7',
        token: 'punctuation.definition.alias.yaml',
      },
      {
        foreground: 'f5c2e7',
        token: 'entity.other.document.begin.yaml',
      },
      {
        foreground: 'fab387',
        token: 'markup.changed.diff',
      },
      {
        foreground: '89b4fa',
        token: 'meta.diff.header.from-file',
      },
      {
        foreground: '89b4fa',
        token: 'meta.diff.header.to-file',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.definition.from-file.diff',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.definition.to-file.diff',
      },
      {
        foreground: 'a6e3a1',
        token: 'markup.inserted.diff',
      },
      {
        foreground: 'f38ba8',
        token: 'markup.deleted.diff',
      },
      {
        foreground: '89b4fa',
        token: 'variable.other.env',
      },
      {
        foreground: 'cdd6f4',
        token: 'string.quoted variable.other.env',
      },
      {
        foreground: '89b4fa',
        token: 'support.function.builtin.gdscript',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.gdscript',
      },
      {
        foreground: 'eba0ac',
        token: 'comment meta.annotation.go',
      },
      {
        foreground: 'fab387',
        token: 'comment meta.annotation.parameters.go',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.go',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.graphql',
      },
      {
        foreground: 'f2cdcd',
        token: 'string.unquoted.alias.graphql',
      },
      {
        foreground: '94e2d5',
        token: 'constant.character.enum.graphql',
      },
      {
        foreground: 'f2cdcd',
        token:
          'meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.other.doctype',
      },
      {
        foreground: 'cba6f7',
        token: 'meta.tag.sgml.doctype punctuation.definition.tag',
      },
      {
        foreground: 'cba6f7',
        token: 'meta.tag.metadata.doctype entity.name.tag',
      },
      {
        foreground: 'cba6f7',
        token: 'meta.tag.metadata.doctype punctuation.definition.tag',
      },
      {
        foreground: '89b4fa',
        token: 'entity.name.tag',
      },
      {
        foreground: 'f38ba8',
        token: 'text.html constant.character.entity',
      },
      {
        foreground: 'f38ba8',
        token: 'text.html constant.character.entity punctuation',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.character.entity.xml',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.character.entity.xml punctuation',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.character.entity.js.jsx',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.charactger.entity.js.jsx punctuation',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.character.entity.tsx',
      },
      {
        foreground: 'f38ba8',
        token: 'constant.character.entity.tsx punctuation',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: 'f5c2e7',
        token: 'support.class.component',
      },
      {
        foreground: 'f5c2e7',
        token: 'support.class.component.jsx',
      },
      {
        foreground: 'f5c2e7',
        token: 'support.class.component.tsx',
      },
      {
        foreground: 'f5c2e7',
        token: 'support.class.component.vue',
      },
      {
        foreground: 'fab387',
        token: 'punctuation.definition.annotation',
      },
      {
        foreground: 'fab387',
        token: 'storage.type.annotation',
      },
      {
        foreground: '94e2d5',
        token: 'constant.other.enum.java',
      },
      {
        foreground: 'cdd6f4',
        token: 'storage.modifier.import.java',
      },
      {
        foreground: 'eba0ac',
        token: 'meta.export variable.other.readwrite.js',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.other.constant.js',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.other.constant.ts',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.other.property.js',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.other.property.ts',
      },
      {
        foreground: 'eba0ac',
        token: 'variable.other.jsdoc',
      },
      {
        foreground: 'eba0ac',
        token: 'comment.block.documentation variable.other',
      },
      {
        foreground: 'cdd6f4',
        token: 'support.type.object.console.js',
      },
      {
        foreground: 'cba6f7',
        token: 'support.constant.node',
      },
      {
        foreground: 'cba6f7',
        token: 'support.type.object.module.js',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.modifier.implements',
      },
      {
        foreground: 'cba6f7',
        token: 'constant.language.null.js',
      },
      {
        foreground: 'cba6f7',
        token: 'constant.language.null.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'constant.language.undefined.js',
      },
      {
        foreground: 'cba6f7',
        token: 'constant.language.undefined.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'support.type.builtin.ts',
      },
      {
        foreground: 'f9e2af',
        token: 'variable.parameter.generic',
      },
      {
        foreground: '94e2d5',
        token: 'keyword.declaration.function.arrow.js',
      },
      {
        foreground: '94e2d5',
        token: 'storage.type.function.arrow.ts',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'punctuation.decorator.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.in.js',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.in.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.infer.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.instanceof.js',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.instanceof.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.is',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.keyof.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.of.js',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.of.ts',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.expression.typeof.ts',
      },
      {
        foreground: '94e2d5',
        fontStyle: 'italic',
        token: 'support.function.macro.julia',
      },
      {
        foreground: 'fab387',
        token: 'constant.language.julia',
      },
      {
        foreground: 'eba0ac',
        token: 'constant.other.symbol.julia',
      },
      {
        foreground: '94e2d5',
        token: 'text.tex keyword.control.preamble',
      },
      {
        foreground: '89dceb',
        token: 'text.tex support.function.be',
      },
      {
        foreground: 'f2cdcd',
        token: 'constant.other.general.math.tex',
      },
      {
        foreground: 'cba6f7',
        token:
          'comment.line.double-dash.documentation.lua storage.type.annotation.lua',
      },
      {
        foreground: 'cdd6f4',
        token:
          'comment.line.double-dash.documentation.lua entity.name.variable.lua',
      },
      {
        foreground: 'cdd6f4',
        token: 'comment.line.double-dash.documentation.lua variable.lua',
      },
      {
        foreground: 'f38ba8',
        token: 'heading.1.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'f38ba8',
        token: 'heading.1.markdown',
      },
      {
        foreground: 'f38ba8',
        token: 'markup.heading.atx.1.mdx',
      },
      {
        foreground: 'f38ba8',
        token: 'markup.heading.atx.1.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'f38ba8',
        token: 'markup.heading.setext.1.markdown',
      },
      {
        foreground: 'f38ba8',
        token: 'markup.heading.heading-0.asciidoc',
      },
      {
        foreground: 'fab387',
        token: 'heading.2.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'fab387',
        token: 'heading.2.markdown',
      },
      {
        foreground: 'fab387',
        token: 'markup.heading.atx.2.mdx',
      },
      {
        foreground: 'fab387',
        token: 'markup.heading.atx.2.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'fab387',
        token: 'markup.heading.setext.2.markdown',
      },
      {
        foreground: 'fab387',
        token: 'markup.heading.heading-1.asciidoc',
      },
      {
        foreground: 'f9e2af',
        token: 'heading.3.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'f9e2af',
        token: 'heading.3.markdown',
      },
      {
        foreground: 'f9e2af',
        token: 'markup.heading.atx.3.mdx',
      },
      {
        foreground: 'f9e2af',
        token: 'markup.heading.atx.3.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'f9e2af',
        token: 'markup.heading.heading-2.asciidoc',
      },
      {
        foreground: 'a6e3a1',
        token: 'heading.4.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'a6e3a1',
        token: 'heading.4.markdown',
      },
      {
        foreground: 'a6e3a1',
        token: 'markup.heading.atx.4.mdx',
      },
      {
        foreground: 'a6e3a1',
        token: 'markup.heading.atx.4.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'a6e3a1',
        token: 'markup.heading.heading-3.asciidoc',
      },
      {
        foreground: '89b4fa',
        token: 'heading.5.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: '89b4fa',
        token: 'heading.5.markdown',
      },
      {
        foreground: '89b4fa',
        token: 'markup.heading.atx.5.mdx',
      },
      {
        foreground: '89b4fa',
        token: 'markup.heading.atx.5.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: '89b4fa',
        token: 'markup.heading.heading-4.asciidoc',
      },
      {
        foreground: 'cba6f7',
        token: 'heading.6.markdown punctuation.definition.heading.markdown',
      },
      {
        foreground: 'cba6f7',
        token: 'heading.6.markdown',
      },
      {
        foreground: 'cba6f7',
        token: 'markup.heading.atx.6.mdx',
      },
      {
        foreground: 'cba6f7',
        token: 'markup.heading.atx.6.mdx punctuation.definition.heading.mdx',
      },
      {
        foreground: 'cba6f7',
        token: 'markup.heading.heading-5.asciidoc',
      },
      {
        foreground: 'f38ba8',
        fontStyle: 'bold',
        token: 'markup.bold',
      },
      {
        foreground: 'f38ba8',
        fontStyle: 'italic',
        token: 'markup.italic',
      },
      {
        foreground: 'a6adc8',
        fontStyle: 'strikethrough',
        token: 'markup.strikethrough',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.definition.link',
      },
      {
        foreground: '89b4fa',
        token: 'markup.underline.link',
      },
      {
        foreground: 'b4befe',
        token: 'text.html.markdown punctuation.definition.link.title',
      },
      {
        foreground: 'b4befe',
        token: 'string.other.link.title.markdown',
      },
      {
        foreground: 'b4befe',
        token: 'markup.link',
      },
      {
        foreground: 'b4befe',
        token: 'punctuation.definition.constant.markdown',
      },
      {
        foreground: 'b4befe',
        token: 'constant.other.reference.link.markdown',
      },
      {
        foreground: 'b4befe',
        token: 'markup.substitution.attribute-reference',
      },
      {
        foreground: 'a6e3a1',
        token: 'punctuation.definition.raw.markdown',
      },
      {
        foreground: 'a6e3a1',
        token: 'markup.inline.raw.string.markdown',
      },
      {
        foreground: 'a6e3a1',
        token: 'markup.raw.block.markdown',
      },
      {
        foreground: '89dceb',
        token: 'fenced_code.block.language',
      },
      {
        foreground: '9399b2',
        token: 'markup.fenced_code.block punctuation.definition',
      },
      {
        foreground: '9399b2',
        token: 'markup.raw support.asciidoc',
      },
      {
        foreground: 'f5c2e7',
        token: 'markup.quote',
      },
      {
        foreground: 'f5c2e7',
        token: 'punctuation.definition.quote.begin',
      },
      {
        foreground: '94e2d5',
        token: 'meta.separator.markdown',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.definition.list.begin.markdown',
      },
      {
        foreground: '94e2d5',
        token: 'markup.list.bullet',
      },
      {
        foreground: '89b4fa',
        token: 'entity.other.attribute-name.multipart.nix',
      },
      {
        foreground: '89b4fa',
        token: 'entity.other.attribute-name.single.nix',
      },
      {
        foreground: 'cdd6f4',
        token: 'variable.parameter.name.nix',
      },
      {
        foreground: 'b4befe',
        token: 'meta.embedded variable.parameter.name.nix',
      },
      {
        foreground: 'f5c2e7',
        token: 'string.unquoted.path.nix',
      },
      {
        foreground: 'f9e2af',
        token: 'support.attribute.builtin',
      },
      {
        foreground: 'f9e2af',
        token: 'meta.attribute.php',
      },
      {
        foreground: 'eba0ac',
        token:
          'meta.function.parameters.php punctuation.definition.variable.php',
      },
      {
        foreground: 'cba6f7',
        token: 'constant.language.php',
      },
      {
        foreground: '89dceb',
        token: 'text.html.php support.function',
      },
      {
        foreground: 'cdd6f4',
        token: 'support.variable.magic.python',
      },
      {
        foreground: 'cdd6f4',
        token: 'meta.function-call.arguments.python',
      },
      {
        foreground: '89dceb',
        fontStyle: 'italic',
        token: 'support.function.magic.python',
      },
      {
        foreground: 'f38ba8',
        fontStyle: 'italic',
        token: 'variable.parameter.function.language.special.self.python',
      },
      {
        foreground: 'f38ba8',
        fontStyle: 'italic',
        token: 'variable.language.special.self.python',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.control.flow.python',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.operator.logical.python',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.function.python',
      },
      {
        foreground: '89dceb',
        token: 'support.token.decorator.python',
      },
      {
        foreground: '89dceb',
        token: 'meta.function.decorator.identifier.python',
      },
      {
        foreground: '89b4fa',
        token: 'meta.function-call.python',
      },
      {
        foreground: 'fab387',
        fontStyle: 'italic',
        token: 'entity.name.function.decorator.python',
      },
      {
        foreground: 'fab387',
        fontStyle: 'italic',
        token: 'punctuation.definition.decorator.python',
      },
      {
        foreground: 'f5c2e7',
        token: 'constant.character.format.placeholder.other.python',
      },
      {
        foreground: 'fab387',
        token: 'support.type.exception.python',
      },
      {
        foreground: 'fab387',
        token: 'support.function.builtin.python',
      },
      {
        foreground: 'fab387',
        token: 'support.type.python',
      },
      {
        foreground: 'cba6f7',
        token: 'constant.language.python',
      },
      {
        foreground: 'eba0ac',
        fontStyle: 'italic',
        token: 'meta.indexed-name.python',
      },
      {
        foreground: 'eba0ac',
        fontStyle: 'italic',
        token: 'meta.item-access.python',
      },
      {
        foreground: 'a6e3a1',
        fontStyle: 'italic',
        token: 'storage.type.string.python',
      },
      {
        foreground: 'f5c2e7',
        token: 'string.regexp punctuation.definition.string.begin',
      },
      {
        foreground: 'f5c2e7',
        token: 'string.regexp punctuation.definition.string.end',
      },
      {
        foreground: 'cba6f7',
        token: 'keyword.control.anchor.regexp',
      },
      {
        foreground: 'cdd6f4',
        token: 'string.regexp.ts',
      },
      {
        foreground: 'a6e3a1',
        token: 'punctuation.definition.group.regexp',
      },
      {
        foreground: 'a6e3a1',
        token: 'keyword.other.back-reference.regexp',
      },
      {
        foreground: 'f9e2af',
        token: 'punctuation.definition.character-class.regexp',
      },
      {
        foreground: 'f5c2e7',
        token: 'constant.other.character-class.regexp',
      },
      {
        foreground: 'f5e0dc',
        token: 'constant.other.character-class.range.regexp',
      },
      {
        foreground: '94e2d5',
        token: 'keyword.operator.quantifier.regexp',
      },
      {
        foreground: 'fab387',
        token: 'constant.character.numeric.regexp',
      },
      {
        foreground: '89b4fa',
        token: 'punctuation.definition.group.no-capture.regexp',
      },
      {
        foreground: '89b4fa',
        token: 'meta.assertion.look-ahead.regexp',
      },
      {
        foreground: '89b4fa',
        token: 'meta.assertion.negative-look-ahead.regexp',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'meta.annotation.rust',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'meta.annotation.rust punctuation',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'meta.attribute.rust',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'punctuation.definition.attribute.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'entity.name.function.macro.rules.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.module.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.modifier.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.struct.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.enum.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.trait.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.union.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.impl.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.function.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'storage.type.type.rust',
      },
      {
        foreground: 'cba6f7',
        token: 'entity.name.type.numeric.rust',
      },
      {
        foreground: 'fab387',
        token: 'meta.generic.rust',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.name.impl.rust',
      },
      {
        foreground: 'fab387',
        token: 'entity.name.module.rust',
      },
      {
        foreground: 'f9e2af',
        fontStyle: 'italic',
        token: 'entity.name.trait.rust',
      },
      {
        foreground: 'f9e2af',
        token: 'storage.type.source.rust',
      },
      {
        foreground: 'f9e2af',
        token: 'entity.name.union.rust',
      },
      {
        foreground: '94e2d5',
        token: 'meta.enum.rust storage.type.source.rust',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'support.macro.rust',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'meta.macro.rust support.function.rust',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'entity.name.function.macro.rust',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'storage.modifier.lifetime.rust',
      },
      {
        foreground: '89b4fa',
        fontStyle: 'italic',
        token: 'entity.name.type.lifetime',
      },
      {
        foreground: 'f5c2e7',
        token: 'string.quoted.double.rust constant.other.placeholder.rust',
      },
      {
        foreground: 'cdd6f4',
        token:
          'meta.function.return-type.rust meta.generic.rust storage.type.rust',
      },
      {
        foreground: '89b4fa',
        token: 'meta.function.call.rust',
      },
      {
        foreground: '89dceb',
        token: 'punctuation.brackets.angle.rust',
      },
      {
        foreground: 'fab387',
        token: 'constant.other.caps.rust',
      },
      {
        foreground: 'eba0ac',
        token: 'meta.function.definition.rust variable.other.rust',
      },
      {
        foreground: 'cdd6f4',
        token: 'meta.function.call.rust variable.other.rust',
      },
      {
        foreground: 'f38ba8',
        token: 'variable.language.self.rust',
      },
      {
        foreground: 'f5c2e7',
        token: 'variable.other.metavariable.name.rust',
      },
      {
        foreground: 'f5c2e7',
        token:
          'meta.macro.metavariable.rust keyword.operator.macro.dollar.rust',
      },
      {
        foreground: 'f5c2e7',
        fontStyle: 'italic',
        token: 'comment.line.shebang',
      },
      {
        foreground: 'f5c2e7',
        fontStyle: 'italic',
        token: 'comment.line.shebang punctuation.definition.comment',
      },
      {
        foreground: 'f5c2e7',
        fontStyle: 'italic',
        token: 'comment.line.shebang',
      },
      {
        foreground: 'f5c2e7',
        fontStyle: 'italic',
        token: 'punctuation.definition.comment.shebang.shell',
      },
      {
        foreground: 'f5c2e7',
        fontStyle: 'italic',
        token: 'meta.shebang.shell',
      },
      {
        foreground: '94e2d5',
        fontStyle: 'italic',
        token: 'comment.line.shebang constant.language',
      },
      {
        foreground: 'f38ba8',
        token:
          'meta.function-call.arguments.shell punctuation.definition.variable.shell',
      },
      {
        foreground: 'f38ba8',
        token:
          'meta.function-call.arguments.shell punctuation.section.interpolation',
      },
      {
        foreground: 'f38ba8',
        token:
          'meta.function-call.arguments.shell punctuation.definition.variable.shell',
      },
      {
        foreground: 'f38ba8',
        token:
          'meta.function-call.arguments.shell punctuation.section.interpolation',
      },
      {
        foreground: 'fab387',
        fontStyle: 'italic',
        token:
          'meta.string meta.interpolation.parameter.shell variable.other.readwrite',
      },
      {
        foreground: '94e2d5',
        token: 'source.shell punctuation.section.interpolation',
      },
      {
        foreground: '94e2d5',
        token: 'punctuation.definition.evaluation.backticks.shell',
      },
      {
        foreground: 'cba6f7',
        token: 'entity.name.tag.heredoc.shell',
      },
      {
        foreground: 'cdd6f4',
        token: 'string.quoted.double.shell variable.other.normal.shell',
      },
    ],
    colors: {
      'editor.foreground': '#cdd6f4',
      'editor.background': '#1e1e2e',
      'editor.selectionBackground': '#585b7066',
      'editor.lineHighlightBackground': '#cdd6f412',
      'editorCursor.foreground': '#f5e0dc',
      'editorIndentGuide.activeBackground': '#45475a',
    },
  },
};
