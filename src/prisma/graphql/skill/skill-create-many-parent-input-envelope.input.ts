import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateManyParentInput } from './skill-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class SkillCreateManyParentInputEnvelope {

    @Field(() => [SkillCreateManyParentInput], {nullable:false})
    @Type(() => SkillCreateManyParentInput)
    data!: Array<SkillCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
